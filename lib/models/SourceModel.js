class SourceModel {
  constructor(source) {
    this.name = source.name
    this.lat = source.lat
    this.lon = source.lon
  }
  toOBJS() {
    return {
      name: this.name,
      lat: this.lat,
      lon: this.lon,
    }
  }
  distance(lat, lon) {
    return Math.sqrt(Math.pow(this.lat - lat, 2) + Math.pow(this.lon - lon, 2))
  }
}

module.exports = {
  SourceModel,
}
