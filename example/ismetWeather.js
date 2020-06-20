const { IsmetWeather, IsmetClient } = require('../lib')

async function main() {
  try {
    let res = await IsmetClient.get()
    let weather = new IsmetWeather(res.data)
    console.log(weather.getAllDataFromIsmet())
  } catch (err) {
    console.log(err)
  }
}

main().catch(console.error)
