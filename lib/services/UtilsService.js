const { SourceModel } = require('../models')
/**
 *
 *
 * @class UtilsService
 */
class UtilsService {
  /**
   *
   * @description Get the best distance Damerau-Levenshtein method
   * @param {*} municipality
   * @param {*} sourceLocationArray
   * @returns SourceModel instance
   * @memberof UtilsService
   */
  getBestDistanceByMunicipality(municipality, sourceLocationArray) {
    let bestSource = new SourceModel(sourceLocationArray[0])
    let bestDistance = bestSource.distance(municipality.lat, municipality.lon)

    for (let i = 0; i < sourceLocationArray.length; i++) {
      let tempSource = new SourceModel(sourceLocationArray[i])
      let tempDistance = tempSource.distance(municipality.lat, municipality.lon)
      if (tempDistance < bestDistance) {
        bestSource = tempSource
        bestDistance = tempDistance
      }
    }

    return bestSource
  }
  /**
   *
   *
   * @param {*} municipalityName
   * @returns
   * @memberof UtilsService
   */
  curateMunicipality(municipalityName) {
    return municipalityName
      .toLowerCase()
      .replace('á', 'a')
      .replace('é', 'e')
      .replace('í', 'i')
      .replace('ó', 'o')
      .replace('ú', 'u')
      .replace('ü', 'u')
      .replace('ñ', 'n')
      .replace('-', '')
  }
}
module.exports = {
  UtilsService: new UtilsService(),
}
