// TODO: Find more locations
const { LOCATIONS } = require('./locations')
const { MUNICIPALITIES } = require('./municipalities')
module.exports = {
  LOCATIONS,
  MUNICIPALITIES,
  API_WEATHER_URI: `https://www.redcuba.cu/api`,
  RESOURCE_SUMARY: `weather_get_summary`,
  RSS_FEED_ISMET: `http://www.insmet.cu/asp/genesis.asp?TB0=RSSFEED`,
}
