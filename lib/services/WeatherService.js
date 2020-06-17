const axios = require('../http')
const { API_WEATHER_URI, RESOURCE_SUMARY, LOCATIONS } = require('../constants')
class RCApiClient {
  async get(location) {
    let loc = LOCATIONS.filter(l =>
      l.toLocaleLowerCase().includes(location.toLowerCase())
    )
    let res = await axios.get(`${API_WEATHER_URI}/${RESOURCE_SUMARY}/${loc[0]}`)

    return res
  }
}
module.exports = {
  RCApiClient: new RCApiClient()
}
