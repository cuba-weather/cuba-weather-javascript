const axios = require('../http')
const { API_WEATHER_URI, RESOURCE_SUMARY, } = require('../constants')
/**
 * @description Class in charge of to create an abstraction between  https://www.redcuba.cu weather Rest API & nodejs apps.
 *
 * @class RCApiClient
 */
class RCApiClient {
  /**
   *
   * @description get information sumary related to a location
   * @param String location
   * @returns Promise<Object> res
   * @memberof RCApiClient
   */
  async get(location) {
    let res = await axios.get(
      `${API_WEATHER_URI}/${RESOURCE_SUMARY}/${location}`
    )

    return res
  }
}
module.exports = {
  RCApiClient: new RCApiClient(),
}
