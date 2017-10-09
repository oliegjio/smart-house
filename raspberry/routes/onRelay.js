const request = require('request')
const requestPromise = require('request-promise')

var checkOnRelayResponse

var init = (app) => {
  app.get('/onRelay', (request, response) => {
    checkOnRelayResponse = response

    requestPromise({
      method: 'GET',
      uri: 'http://192.168.0.2/onRelay'
    })
    .then((body) => {
      checkOnRelayResponse.send(body)
    })
    .catch((error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
