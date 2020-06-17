const { RCApiClient } = require('../index')

const axios = require('../http')
jest.mock('../http', () => {
  return {
    get: jest.fn(),
  }
})
let MOCK_DATA = {
  cityName: 'Municipio Especial Isla de la Juventud',
  dt: {
    date: '2020-06-17 17:00:00.000000',
    timezone_type: 3,
    timezone: 'America/Havana',
  },
  temp: 28.78,
  pressure: 1015,
  humidity: 72,
  iconWeather: 'http://www.redcuba.cu/bundles/orionweather/images/10d.png',
  windstring: 'Velocidad 2.96 m/s Este (99 °)',
  descriptionWeather: 'Lluvia ligera',
}
describe('get -> WeatherServcice', () => {
  it(`should get info weather from any location`, async () => {
    axios.get.mockResolvedValue({
      data: MOCK_DATA,
    })
    let result = await RCApiClient.get('Municipio Especial Isla de la Juventud')
    expect(result).toEqual({
      data: MOCK_DATA,
    })
  })
})
