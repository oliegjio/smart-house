const request = require('request')
const requestPromise = require('request-promise')

var checkLightResponse

var init = (app) => {
  app.get('/checkLight', (request, response) => {
    checkLightResponse = response

    try {
      requestPromise({
        method: 'GET',
        uri: 'http://192.168.0.5/checkLight'
      })
      .then((body) => {
        checkLightResponse.send(body)
      })
      .catch((error) => {
        // console.log(error)
        checkLightResponse.end()
      })
    } catch (exception) {
      console.log('Error!')
    }
  })
}

module.exports.init = init
