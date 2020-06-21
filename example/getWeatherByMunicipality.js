const {
  RCApiClient,
  RCWeather,
  RED_CUBA_SOURCE,
  MUNICIPALITIES,
  UtilsService,
} = require('../lib')
async function main() {
  let locationStr = 'cerro'
  let municipality = MUNICIPALITIES.find(
    (municipality) => municipality.nameCured === locationStr
  )
  let bestSource = UtilsService.getBestDistanceByMunicipality(
    municipality,
    RED_CUBA_SOURCE
  )

  try {
    let res = await RCApiClient.get(bestSource.name)
    let weather = new RCWeather(res.data.data)
    console.log(weather.weathertoString())
  } catch (err) {
    console.log(err)
  }
}

main().catch(console.error)
