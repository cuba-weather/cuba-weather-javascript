const { RCApiClient, RCWeather } = require('../index')
async function main() {
  let locationStr = 'Municipio Especial Isla de la Juventud'
  try {
    let res = await RCApiClient.get(locationStr)
    let weather = new RCWeather(res.data.data)
    console.log(weather.weathertoString())
  } catch (err) {
    console.log(err)
  }
}

main().catch(console.error)
