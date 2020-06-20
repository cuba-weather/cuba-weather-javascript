const { Forecast } = require('../models')

const { MOCK_ISMET_DATA } = require('./stub')
describe('Ismet -> IsmetServcice', () => {
  it(`should parse info weather from ismet`, async () => {
    let dataParsed = new Forecast(MOCK_ISMET_DATA)
    console.log(dataParsed)
  })
})
