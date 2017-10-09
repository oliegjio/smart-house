const request = require('request')
const requestPromise = require('request-promise')

var checkWaterResponse

var init = (app) => {
  app.get('/checkWater', (request, response) => {
    checkWaterResponse = response

    try {
      requestPromise({
        method: 'GET',
        uri: 'http://192.168.0.3/getWater'
      })
      .then((body) => {
        console.log(body)
        checkWaterResponse.send(body)
      })
      .catch((error) => {
        // console.log(error)
        checkWaterResponse.end()
      })
    } catch (exception) {
      console.log('Error!')
    }
  })
}

module.exports.init = init
