const { LOCATIONS } = require('./constants')
const { RCApiClient } = require('./services/WeatherService')
const { Weather } = require('./models/weather')

module.exports = {
  RCApiClient,
  Weather,
  LOCATIONS
}
