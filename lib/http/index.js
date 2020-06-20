const Axios = require('axios')
const { API_WEATHER_URI } = require('../constants')

// instance of axios for global usage
const instance = Axios.create({
  baseURL: API_WEATHER_URI,
})

instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.headers.common['Content-Type'] = 'application/json'

module.exports = instance
