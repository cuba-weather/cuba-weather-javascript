// TODO: forecast model from ismte.cu
const cheerio = require('cheerio')
const parser = require('xml2json')
class Forecast {
  constructor(pageStr) {
    let pageJSON = JSON.parse(parser.toJson(pageStr))
    let items = pageJSON.rss.channel.item

    this.data = items.map((item) => {
      return {
        title: item.title,
        description: this.parseDescription(item.description).description,
        weatherDays: this.parseDescription(item.description).weatherDays,
        pubDate:
          item.pubDate === undefined ? 'notDate' : this.parseDate(item.pubDate),
      }
    })
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
      result.weatherDays = this.converTableToCSV(data)
    } else {
      result.description = this.parserHtmlDescription(data)
    }

    return result
  }
  converTableToCSV(tableHtml) {
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
  Forecast,
}
