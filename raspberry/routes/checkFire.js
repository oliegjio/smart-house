const request = require('request')
const requestPromise = require('request-promise')

var checkFireResponse

var init = (app) => {
  app.get('/checkFire', (request, response) => {
    checkFireResponse = response

    requestPromise({
      method: 'GET',
      uri: 'http://192.168.0.4/checkfire'
    })
    .then((body) => {
      checkFireResponse.send(body)
    })
    .catch((error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
