const axios = require('../http')
const { RSS_FEED_ISMET } = require('../constants')

class IsmetClient {
  // Method to make the request GET to API
  async get() {
    let res = await axios.get(RSS_FEED_ISMET)
    return res
  }
}
module.exports = {
  IsmetClient: new IsmetClient(),
}
