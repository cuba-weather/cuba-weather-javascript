// TODO: forecast model from ismte.cu
const cheerio = require('cheerio')
const parser = require('xml2json')

const droughtStatus = 'Estado de la Sequía.'
const forecast = 'Pronóstico del Tiempo para mañana.'
const provinces = 'Pronóstico Extendido del Tiempo por Ciudades'
class IsmetWeather {
  constructor(pageStr) {
    let pageJSON = JSON.parse(parser.toJson(pageStr))
    let items = pageJSON.rss.channel.item

    this.data = items
  }
  getAllDataFromIsmet() {
    return {
      weatherDays: this.getIsmetWeatherDays(),
      forecast: this.getIsmetForecast(),
      droughtStatus: this.getIsmetDroughtStatus(),
      datetime: this.getIsmetDateTime(),
    }
  }
  getIsmetWeatherDays() {
    return this.data
      .map((item) => {
        return {
          cityName: this.getCityNames(item),
          weatherDays: this.parseDescription(item.description).weatherDays,
        }
      })
      .filter((el) => el.cityName !== undefined)
  }
  getIsmetForecast() {
    return this.data
      .map((item) => {
        return {
          title: item.title,
          description: this.parseDescription(item.description).description,
        }
      })
      .filter((el) => {
        if (el.description !== undefined && el.title === forecast) {
          return el
        }
      })[0]
  }
  getIsmetDroughtStatus() {
    return this.data
      .map((item) => {
        return {
          title: item.title,
          description: this.parseDescription(item.description).description,
        }
      })
      .filter((el) => {
        if (el.description !== undefined && el.title === droughtStatus) {
          return el
        }
      })[0]
  }
  getIsmetDateTime() {
    return this.data
      .map((item) => {
        return {
          dateTime:
            item.pubDate === undefined
              ? 'notDate'
              : this.parseDate(item.pubDate),
        }
      })
      .filter((el) => el.dateTime !== 'notDate')[0].dateTime
  }
  getCityNames(item) {
    if (item.title !== droughtStatus && item.title !== forecast) {
      return item.title.replace(provinces, 'PINAR DEL RIO')
    }
  }
  parseDate(data) {
    let pubDate = data
      .replace('\n', '')
      .split(' ')
      .filter((el) => el !== '')
    let fecha = pubDate[0].split('/')
    let newDate = `${fecha[2]}-${fecha[0]}-${fecha[1]}T${pubDate[1]}`
    return newDate
  }

  parseDescription(data) {
    let tables = data.replace('[\\n\\t ]', '').includes('<table>')
    let result = {}
    if (tables) {
      result.weatherDays = this.getWeatherDays(data)
    } else {
      result.description = this.parserHtmlDescription(data)
    }

    return result
  }
  getWeatherDays(tableHtml) {
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
  parserHtmlDescription(descriptionHtml) {
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
