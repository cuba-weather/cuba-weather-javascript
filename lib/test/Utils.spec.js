const { ISMET_LOCATIONS, RED_CUBA_SOURCE } = require('../constants')
const { SourceModel } = require('../models')
// TODO: make refactor for this tests
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
