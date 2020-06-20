const { LOCATIONS } = require('./constants')
const { RCApiClient } = require('./services/WeatherService')
const { Weather } = require('./models/weather')
const { Forecast } = require('./models/forecast')

module.exports = {
  RCApiClient,
  Weather,
  LOCATIONS,
  Forecast,
}
