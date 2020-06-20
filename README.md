# Cuba Weather JavaScript

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

Application programming interface of the Cuba Weather project implemented in JavaScript.

Currently the weather information is obtained from the Cuban search engine [www.redcuba.cu](https://www.redcuba.cu).

## Install

```bash
npm install cuba-weather-javascript
```

You can also clone or download this repository and at the root of the project do:

```bash
git clone https://github.com/kenriortega/cuba-weather-javascript.git
```

## Test

```bash
npm test
```

### Package Red Cuba Client

```javascript
const { RCApiClient, RCWeather } = require('../lib')
async function main() {
  let locationStr = 'Municipio Especial Isla de la Juventud'
  try {
    let res = await RCApiClient.get(locationStr)
    let weather = new Weather(res.data.data)
    console.log(weather.weathertoString())
  } catch (err) {
    let error = {
      status: err.response.status,
      statusText: err.response.statusText,
      locationStr,
    }
    console.log(error)
  }
}

main().catch(console.error)
```

### Package Ismet Client

```javascript
const { IsmetWeather, IsmetClient } = require('../lib')

async function main() {
  try {
    let res = await IsmetClient.get()
    let weather = new IsmetWeather(res.data)
    console.log(weather.getAllDataFromIsmet())
  } catch (err) {
    console.log(err)
  }
}

main().catch(console.error)
```
