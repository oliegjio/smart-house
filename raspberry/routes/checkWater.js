const request = require('request')
const requestPromise = require('request-promise')

var checkWaterResponse

var init = (app) => {
  app.get('/checkWater', (request, response) => {
    checkWaterResponse = response

    requestPromise({
      method: 'GET',
      uri: 'http://192.168.0.3/checkWater'
    })
    .then((body) => {
      checkWaterResponse.send(body)
    })
    .catch((error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
