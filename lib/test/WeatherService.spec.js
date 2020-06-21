const { RCApiClient, RCWeather } = require('../index')
const { MOCK_RC_DATA } = require('./stub')
//TODO: add expect and equal checks for all test

const axios = require('../http')
jest.mock('../http', () => {
  return {
    get: jest.fn(),
  }
})

describe('get -> WeatherServcice', () => {
  it(`should get info weather from https://www.redcuba.cu  any location`, async () => {
    axios.get.mockResolvedValue({
      data: MOCK_RC_DATA,
    })
    let result = await RCApiClient.get('Municipio Especial Isla de la Juventud')
    expect(result).toEqual({
      data: MOCK_RC_DATA,
    })
  })

  it(`shuld get info weather redcuba`, async () => {
    let weather = new RCWeather(MOCK_RC_DATA)
    console.log(weather.weathertoString())
    console.log(weather.weathertoOBJS())
  })
})
