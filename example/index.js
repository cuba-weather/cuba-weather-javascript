const { RCApiClient, Weather } = require('../lib')
async function main() {
  let locationStr = 'Municipio Especial Isla de la Juventud'
  try {
    let res = await RCApiClient.get(locationStr)
    let weather = new Weather(res.data.data)
    console.log(weather.weathertoString())
  } catch (err) {
    let error = {
      status: err.response.status,
      statusText: err.response.statusText,
      locationStr
    }
    console.log(error)
  }
}

main().catch(console.error)
