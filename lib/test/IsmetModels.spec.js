const { IsmetWeather } = require('../index')
//TODO: add expect and equal checks for all test
const { MOCK_ISMET_DATA, MOCK_ISMET_PNTR } = require('./stub')
describe('Ismet -> IsmetWeatherModel', () => {
  it(`should get info weather of days from ismet`, async () => {
    let begind = MOCK_ISMET_PNTR.indexOf('var pdia=new Array(')
    let end = MOCK_ISMET_PNTR.indexOf(",'');")
    let stringDayWeather = MOCK_ISMET_PNTR.substring(begind, end)
    console.log(stringDayWeather)
    // console.log(dataParsed.getIsmetWeatherDays())
  })
  it(`should get info weather of forecast from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    // console.log(dataParsed.getIsmetForecast())
  })
  it(`should get info weather of Drought Status from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    // console.log(dataParsed.getIsmetDroughtStatus())
  })
  it(`should get info weather of Date time from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    // console.log(dataParsed.getIsmetDateTime())
  })
  it(`should get info weather from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    // console.log(dataParsed.getAllDataFromIsmet())
  })
})
