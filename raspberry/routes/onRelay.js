const request = require('request')
const requestPromise = require('request-promise')

var checkOnRelayResponse

var init = (app) => {
  app.get('/onRelay', (request, response) => {
    checkOnRelayResponse = response

    try {
      requestPromise({
        method: 'GET',
        uri: 'http://192.168.0.2/onRelay'
      })
      .then((body) => {
        console.log(body)
        checkOnRelayResponse.send(body)
      })
      .catch((error) => {
        // console.log(error)
        checkOnRelayResponse.end()
      })
    } catch (exception) {
      console.log('Error!')
    }
  })
}

module.exports.init = init
