const axios = require('../http')
const { MOCK_ISMET_DATA } = require('./stub')
const { IsmetClient } = require('../index')

jest.mock('../http', () => {
  return {
    get: jest.fn(),
  }
})

describe('get -> IsmetServcice', () => {
  it(`should get info weather from http://www.insmet.cu/`, async () => {
    axios.get.mockResolvedValue({
      data: MOCK_ISMET_DATA,
    })
    let result = await IsmetClient.get()
    expect(result).toEqual({
      data: MOCK_ISMET_DATA,
    })
  })
})
