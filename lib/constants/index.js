const { MUNICIPALITIES } = require('./municipalities')
const { RED_CUBA_SOURCE } = require('./rclocations')
const { ISMET_LOCATIONS } = require('./ismetLocations')
const { ISMET_STATE } = require('./ismetState')
const { CARDINAL_POINTS } = require('./cardinalPoint')
module.exports = {
  MUNICIPALITIES,
  RED_CUBA_SOURCE,
  ISMET_LOCATIONS,
  ISMET_STATE,
  CARDINAL_POINTS,
  API_WEATHER_URI: `https://www.redcuba.cu/api`,
  RESOURCE_SUMARY: `weather_get_summary`,
}
