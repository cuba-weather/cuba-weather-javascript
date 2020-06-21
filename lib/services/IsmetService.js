const axios = require('../http')
const { RSS_FEED_ISMET } = require('../constants')
const Iconv = require('iconv').Iconv
/**
 *
 * @description Ismet client to fetch data
 * @class IsmetClient
 */
class IsmetClient {
  /**
   *
   * @description get data from RSFEED ismet
   * @returns
   * @memberof IsmetClient
   */
  async get() {
    let res = await axios.get(RSS_FEED_ISMET, { responseType: 'arraybuffer' })
    res.data = this.toUTF8(res.data)
    return res
  }
  /**
   *
   * @description Convert buffer body form 'iso-8859-1', 'utf-8'
   * @param {*} body
   * @returns String
   * @memberof IsmetClient
   */
  toUTF8(body) {
    // convert from iso-8859-1 to utf-8
    let ic = new Iconv('iso-8859-1', 'utf-8')
    let buf = ic.convert(body)
    return buf.toString('utf-8')
  }
}
module.exports = {
  IsmetClient: new IsmetClient(),
}
