const request = require('request')
const requestPromise = require('request-promise')

var checkOffRelayResponse

var init = (app) => {
  app.get('/offRelay', (request, response) => {
    checkOffRelayResponse = response

    requestPromise({
      method: 'GET',
      uri: 'http://192.168.0.2/offRelay'
    })
    .then((body) => {
      checkOffRelayResponse.send(body)
    })
    .catch((error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
