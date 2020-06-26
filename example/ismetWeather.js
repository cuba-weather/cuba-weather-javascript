const { IsmetWeather, IsmetClient } = require('../index')
async function main() {
  try {
    let res = await IsmetClient.get()
    // console.log(res.data)
    let weather = new IsmetWeather(res.data)
    console.log(weather.getAllDataFromIsmet())
  } catch (err) {
    console.log(err)
  }
}

main().catch(console.error)
