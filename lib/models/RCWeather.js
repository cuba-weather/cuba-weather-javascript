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
  _getCityName() {
    return this.data.cityName
  }

  /**
   *
   * @description Return the info related to Date
   * @returns {Object}
   * @memberof Weather
   */
  _getTimeStamp() {
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
  _getTemperature() {
    return this.data.temp
  }
  /**
   *
   * @description Return the info related to temperature in Fahrenheit
   * @returns {String}
   * @memberof Weather
   */
  _getTemperatureFahrenheit() {
    return (this.data.temp * 9) / 5 + 32
  }
  /**
   *
   * @description Return the info related to humidity
   * @returns {String}
   * @memberof Weather
   */
  _getHumidity() {
    return this.data.humidity
  }
  /**
   *
   * @description Return the info related to pressure
   * @returns {String}
   * @memberof Weather
   */
  _getPressure() {
    return this.data.pressure
  }
  /**
   *
   * @description Return the info related to windstring
   * @returns {String}
   * @memberof Weather
   */
  _getWindstring() {
    return this.data.windstring
  }

  /**
   *
   * @description Return an Object assets with the iconWeather & descriptionWeather
   * @returns {Object}
   * @memberof Weather
   */
  _getAssetsWeather() {
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
      City Name: ${this._getCityName()}\n
      Temperature: ${this._getTemperature()}°C / ${this._getTemperatureFahrenheit()}°F\n
      Humidity: ${this._getHumidity()}%
      Pressure: ${this._getPressure()} hpa
      TimeStamp: ${this._getTimeStamp().date}
      Zone: ${this._getTimeStamp().timezone}
      Wind Velocity: ${
        this._parseWindString(this._getWindstring()).windVelocity
      } Km/h\n
      Wind Direction: ${
        this._parseWindString(this._getWindstring()).windDirection
      }\n
      Wind Direction Description: ${
        this._parseWindString(this._getWindstring()).windDirectionDesc
      }\n
      Wind Direction Degree: ${
        this._parseWindString(this._getWindstring()).windDegree
      }\n
      Wind Direction Radians: ${
        this._parseWindString(this._getWindstring()).windDirectionRadians
      }\n
      Description: ${this._getAssetsWeather().descriptionWeather}\n
      Image Link: ${this._getAssetsWeather().iconWeather}
      `
  }
  weathertoOBJS() {
    return {
      cityName: this._getCityName(),
      tempC: this._getTemperature(),
      tempF: this._getTemperatureFahrenheit(),
      humidity: this._getHumidity(),
      pressure: this._getPressure(),
      timestamp: this._getTimeStamp().date,
      zone: this._getTimeStamp().timezone,
      windVelocity: this._parseWindString(this._getWindstring()).windVelocity,
      windDirection: this._parseWindString(this._getWindstring()).windDirection,
      windDirectionDegree: +this._parseWindString(this._getWindstring())
        .windDegree,
      windDirectionRadians: this._parseWindString(this._getWindstring())
        .windDirectionRadians,
      windDirectionDescription: this._parseWindString(this._getWindstring())
        .windDirectionDesc,
      descriptionWeather: this._getAssetsWeather().descriptionWeather,
      iconWeather: this._getAssetsWeather().iconWeather,
    }
  }
  _parseWindString(windsString) {
    let beginIndex = windsString.indexOf('Velocidad')
    let endIndex = windsString.indexOf('m/s')
    let windVelocityString = windsString.substring(beginIndex, endIndex)
    let windVelocity = this._parseWindVelocity(windVelocityString.trim())
    beginIndex = endIndex + 3
    endIndex = windsString.length
    let windDirectionDesc = windsString.substring(beginIndex, endIndex).trim()
    let windDegree = this._parseWindDegree(windDirectionDesc)
    let windDirectionRadians = this._parseWindRadians(windDegree)
    let windDirection = this._parseDirection(windDirectionDesc)

    return {
      windDirectionDesc,
      windVelocity,
      windDegree,
      windDirectionRadians,
      windDirection,
    }
  }
  _parseWindVelocity(input) {
    return input.split(' ')[1] * 3.6
  }
  _parseDirection(input) {
    let direction = input.split(' ')[0].toLowerCase().trim()
    return direction
  }
  _parseWindDegree(input) {
    let result = input.split(' ')[1].substring(1)
    return result
  }
  _parseWindRadians(degree) {
    let temp = degree * Math.PI
    let result = temp / 180
    return result
  }
}

module.exports = {
  RCWeather,
}
