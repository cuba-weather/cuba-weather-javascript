const { IsmetWeather } = require('../index')

const { MOCK_ISMET_DATA } = require('./stub')
describe('Ismet -> IsmetServcice', () => {
  it(`should get info weather of days from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    console.log(dataParsed.getIsmetWeatherDays())
  })
  it(`should get info weather of forecast from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    console.log(dataParsed.getIsmetForecast())
  })
  it(`should get info weather of Drought Status from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    console.log(dataParsed.getIsmetDroughtStatus())
  })
  it(`should get info weather of Date time from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    console.log(dataParsed.getIsmetDateTime())
  })
  it(`should get info weather from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    console.log(dataParsed.getAllDataFromIsmet())
  })
})
