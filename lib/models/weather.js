// Model class for mapping the json returned by the https://www.redcuba.cu weather API.
const moment = require('moment')
moment.locale('es')

class Weather {
  constructor(data) {
    this.data = data
  }

  getCityName() {
    return this.data.cityName
  }

  getTimeStamp() {
    this.timestamp = {
      date: moment(this.data.dt.date).fromNow(),
      timezone_type: this.data.dt.timezone_type,
      timezone: this.data.dt.timezone
    }
    return this.timestamp
  }

  getTemperature() {
    return this.data.temp
  }
  getTemperatureFahrenheit() {
    return (this.data.temp * 9) / 5 + 32
  }
  getHumidity() {
    return this.data.humidity
  }
  getPressure() {
    return this.data.pressure
  }
  getWindstring() {
    return this.data.windstring
  }

  getAssetsWeather() {
    this.assets = {
      iconWeather: this.data.iconWeather,
      descriptionWeather: this.data.descriptionWeather
    }
    return this.assets
  }

  weathertoString() {
    return `
      City Name: ${this.getCityName()}\n
      Temperature: ${this.getTemperature()}°C / ${this.getTemperatureFahrenheit()}°F\n
      Humidity: ${this.getHumidity()}%
      Pressure: ${this.getPressure()} hpa
      Wind: ${this.getWindstring()}
      TimeStamp: ${this.getTimeStamp().date}
      Zone: ${this.getTimeStamp().timezone}
      `
  }
}

module.exports = {
  Weather
}
