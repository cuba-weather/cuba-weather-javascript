const { ISMET_LOCATIONS, RED_CUBA_SOURCE } = require('../constants')
describe('Utils -> BestSources', () => {
  it(`should get the best source`, async () => {
    let municipality = {
      name: 'Cerro',
      lat: 23.113611,
      lon: -82.363333,
      nameCured: 'cerro',
    }

    let bestSource = new SourceModel(ISMET_LOCATIONS[0])
    let bestDistance = bestSource.distance(municipality.lat, municipality.lon)

    console.log('Find municipalities', bestSource, 'bestDistance', bestDistance)

    for (let i = 0; i < ISMET_LOCATIONS.length; i++) {
      let tempSource = new SourceModel(ISMET_LOCATIONS[i])
      let tempDistance = tempSource.distance(municipality.lat, municipality.lon)
      if (tempDistance < bestDistance) {
        bestSource = tempSource
        bestDistance = tempDistance
      }
    }

    console.log('ISMET_LOCATIONS', bestSource)
  })

  it(`should get the best source from redcuba locations`, async () => {
    let municipality = {
      name: 'Cerro',
      lat: 23.113611,
      lon: -82.363333,
      nameCured: 'cerro',
    }

    let bestSource = new SourceModel(RED_CUBA_SOURCE[0])
    let bestDistance = bestSource.distance(municipality.lat, municipality.lon)

    console.log('Find municipalities', bestSource, 'bestDistance', bestDistance)

    for (let i = 0; i < RED_CUBA_SOURCE.length; i++) {
      let tempSource = new SourceModel(RED_CUBA_SOURCE[i])
      let tempDistance = tempSource.distance(municipality.lat, municipality.lon)
      if (tempDistance < bestDistance) {
        bestSource = tempSource
        bestDistance = tempDistance
      }
    }

    console.log('ISMET_LOCATIONS', bestSource)
  })
})

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
