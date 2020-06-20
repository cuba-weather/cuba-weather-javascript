const { RCApiClient } = require('../index')
const { MOCK_RC_DATA } = require('./stub')

const axios = require('../http')
jest.mock('../http', () => {
  return {
    get: jest.fn(),
  }
})

describe('get -> WeatherServcice', () => {
  it(`should get info weather from any location`, async () => {
    axios.get.mockResolvedValue({
      data: MOCK_RC_DATA,
    })
    let result = await RCApiClient.get('Municipio Especial Isla de la Juventud')
    expect(result).toEqual({
      data: MOCK_RC_DATA,
    })
  })
})
