const moment = require('moment')
moment.locale('es')
/**
 * @description Model class for mapping the json returned by the https://www.redcuba.cu weather API.
 *
 * @class Weather
 */
class RCWeather {
  /**
   *Creates an instance of Weather.
   * @param {*} data
   * @memberof Weather
   */
  constructor(data) {
    this.data = data
  }

  /**
   *
   * @description Return the info related to City Name
   * @returns {String}
   * @memberof Weather
   */
  getCityName() {
    return this.data.cityName
  }

  /**
   *
   * @description Return the info related to Date
   * @returns {Object}
   * @memberof Weather
   */
  getTimeStamp() {
    this.timestamp = {
      date: moment(this.data.dt.date).fromNow(),
      timezone_type: this.data.dt.timezone_type,
      timezone: this.data.dt.timezone,
    }
    return this.timestamp
  }

  /**
   *
   * @description Return the info related to temperature in °C
   * @returns {String}
   * @memberof Weather
   */
  getTemperature() {
    return this.data.temp
  }
  /**
   *
   * @description Return the info related to temperature in Fahrenheit
   * @returns {String}
   * @memberof Weather
   */
  getTemperatureFahrenheit() {
    return (this.data.temp * 9) / 5 + 32
  }
  /**
   *
   * @description Return the info related to humidity
   * @returns {String}
   * @memberof Weather
   */
  getHumidity() {
    return this.data.humidity
  }
  /**
   *
   * @description Return the info related to pressure
   * @returns {String}
   * @memberof Weather
   */
  getPressure() {
    return this.data.pressure
  }
  /**
   *
   * @description Return the info related to windstring
   * @returns {String}
   * @memberof Weather
   */
  getWindstring() {
    return this.data.windstring
  }

  /**
   *
   * @description Return an Object assets with the iconWeather & descriptionWeather
   * @returns {Object}
   * @memberof Weather
   */
  getAssetsWeather() {
    this.assets = {
      iconWeather: this.data.iconWeather,
      descriptionWeather: this.data.descriptionWeather,
    }
    return this.assets
  }

  /**
   *
   * @description show info for the model weather.
   * @returns {String}
   * @memberof Weather
   */
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
  RCWeather,
}
