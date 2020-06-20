const { IsmetWeather, IsmetClient } = require('../lib')

async function main() {
  let locationStr = 'Municipio Especial Isla de la Juventud'
  try {
    let res = await IsmetClient.get()
    console.log(res)
  } catch (err) {
    let error = {
      status: err.response.status,
      statusText: err.response.statusText,
      locationStr,
    }
    console.log(error)
  }
}

main().catch(console.error)
