/**
 *
 *
 * @class SourceModel
 */
class SourceModel {
  /**
   *Creates an instance of SourceModel.
   * @param {*} source
   * @memberof SourceModel
   */
  constructor(source) {
    this.name = source.name
    this.lat = source.lat
    this.lon = source.lon
  }
  /**
   *
   *
   * @returns
   * @memberof SourceModel
   */
  toOBJS() {
    return {
      name: this.name,
      lat: this.lat,
      lon: this.lon,
    }
  }
  /**
   *
   *
   * @param {*} lat
   * @param {*} lon
   * @returns
   * @memberof SourceModel
   */
  distance(lat, lon) {
    return Math.sqrt(Math.pow(this.lat - lat, 2) + Math.pow(this.lon - lon, 2))
  }
}

module.exports = {
  SourceModel,
}
