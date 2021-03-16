//TODO: import most global objects.
const {
  MUNICIPALITIES,
  ISMET_LOCATIONS,
  RED_CUBA_SOURCE,
} = require('./lib/constants')
const { RCApiClient, UtilsService } = require('./lib/services')
const { RCWeather, } = require('./lib/models')

module.exports = {
  MUNICIPALITIES,
  ISMET_LOCATIONS,
  RED_CUBA_SOURCE,
  RCApiClient,
  RCWeather,
  UtilsService,
}
