const cheerio = require('cheerio')
const parser = require('xml2json')

const droughtStatus = 'Estado de la Sequía.'
const forecast = 'Pronóstico del Tiempo para mañana.'
const provinces = 'Pronóstico Extendido del Tiempo por Ciudades'
/**
 *
 * @description model Ismet weather it used to interact with ismet data
 * @class IsmetWeather
 */
class IsmetWeather {
  /**
   *Creates an instance of IsmetWeather.
   * @param {*} pageStr
   * @memberof IsmetWeather
   */
  constructor(pageStr) {
    let pageJSON = JSON.parse(parser.toJson(pageStr))
    let items = pageJSON.rss.channel.item

    this.data = items
  }
  /**
   *
   * @description getAllDataFromIsmet return an Object with the info related to Ismet data extract to RSFEED
   * @returns Object
   * @memberof IsmetWeather
   */
  getAllDataFromIsmet() {
    return {
      weatherDays: this._getIsmetWeatherDays(),
      forecast: this._getIsmetForecast(),
      droughtStatus: this._getIsmetDroughtStatus(),
      datetime: this._getIsmetDateTime(),
    }
  }
  /**
   *
   * @description Return an array with the info related to weather by city
   * @returns Array<Object>
   * @memberof IsmetWeather
   */
  _getIsmetWeatherDays() {
    return this.data
      .map((item) => {
        return {
          cityName: this._getCityNames(item),
          weatherDays: this._parseDescription(item.description).weatherDays,
        }
      })
      .filter((el) => el.cityName !== undefined)
  }
  /**
   *
   * @description return an object with the info forecast
   * @returns Object
   * @memberof IsmetWeather
   */
  _getIsmetForecast() {
    return this.data
      .map((item) => {
        return {
          title: item.title,
          description: this._parseDescription(item.description).description,
        }
      })
      .filter((el) => {
        if (el.description !== undefined && el.title === forecast) {
          return el
        }
      })[0]
  }
  /**
   * @description return an object with the info Drought Status
   * @returns Object
   * @memberof IsmetWeather
   */
  _getIsmetDroughtStatus() {
    return this.data
      .map((item) => {
        return {
          title: item.title,
          description: this._parseDescription(item.description).description,
        }
      })
      .filter((el) => {
        if (el.description !== undefined && el.title === droughtStatus) {
          return el
        }
      })[0]
  }
  /**
   *
   * @description return a String with the time of publication
   * @returns String dateTime
   * @memberof IsmetWeather
   */
  _getIsmetDateTime() {
    return this.data
      .map((item) => {
        return {
          dateTime:
            item.pubDate === undefined
              ? 'notDate'
              : this._parseDate(item.pubDate),
        }
      })
      .filter((el) => el.dateTime !== 'notDate')[0].dateTime
  }
  /**
   *
   * @description Change the title by PINAR DEL RIO province becouse this  not exist in the RSFEED
   * @param {*} item
   * @returns String cityName
   * @memberof IsmetWeather
   */
  _getCityNames(item) {
    if (item.title !== droughtStatus && item.title !== forecast) {
      return item.title.replace(provinces, 'PINAR DEL RIO')
    }
  }
  /**
   *
   * @description parse the date
   * @param {*} data
   * @returns String newDate
   * @memberof IsmetWeather
   */
  _parseDate(data) {
    let pubDate = data
      .replace('\n', '')
      .split(' ')
      .filter((el) => el !== '')
    let fecha = pubDate[0].split('/')
    let newDate = `${fecha[2]}-${fecha[0]}-${fecha[1]}T${pubDate[1]}`
    return newDate
  }

  /**
   *
   * @description parse the descriptions
   * @param {*} data
   * @returns Object result
   * @memberof IsmetWeather
   */
  _parseDescription(data) {
    let tables = data.replace('[\\n\\t ]', '').includes('<table>')
    let result = {}
    if (tables) {
      result.weatherDays = this._getWeatherDays(data)
    } else {
      result.description = this._parserHtmlDescription(data)
    }

    return result
  }
  /**
   *
   * @description get weather days
   * @param {*} tableHtml
   * @returns Array<Object> weatherDays
   * @memberof IsmetWeather
   */
  _getWeatherDays(tableHtml) {
    const $ = cheerio.load(tableHtml)
    let weatherDays = []
    $('body > table > tbody > tr ').each((index, element) => {
      if (index === 0) return true
      const tds = $(element).find('td')
      weatherDays.push({
        day: $(tds[0]).text(),
        min: $(tds[1]).text(),
        max: $(tds[2]).text(),
        description: $(tds[3]).text(),
      })
    })
    return weatherDays
  }
  /**
   *
   * @description parse html descriptions
   * @param {*} descriptionHtml
   * @returns String description
   * @memberof IsmetWeather
   */
  _parserHtmlDescription(descriptionHtml) {
    const $ = cheerio.load(descriptionHtml)
    let descriptionText = $('body').text()
    let descriptionToParse = descriptionText.split('\n\t')
    let description = descriptionToParse.map((el) => el.trim()).join('\n')
    return description
  }
}

module.exports = {
  IsmetWeather,
}
