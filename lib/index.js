const { LOCATIONS } = require('./constants')
const { RCApiClient } = require('./services/WeatherService')
const { Weather, Forecast } = require('./models/')

module.exports = {
  RCApiClient,
  Weather,
  LOCATIONS,
  Forecast,
}
