const { IsmetWeather } = require('../index')

const { MOCK_ISMET_DATA } = require('./stub')
describe('Ismet -> IsmetServcice', () => {
  it(`should parse info weather from ismet`, async () => {
    let dataParsed = new IsmetWeather(MOCK_ISMET_DATA)
    console.log(dataParsed)
  })
})
