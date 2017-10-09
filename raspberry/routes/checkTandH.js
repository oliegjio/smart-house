const request = require('request')
const requestPromise = require('request-promise')

var checkTandHResponse

var init = (app) => {
  app.get('/checkTandH', (request, response) => {
    checkTandHResponse = response
    
    requestPromise({
      method: 'GET',
      uri: 'http://192.168.0.6/checkTandH'
    })
    .then((body) => {
      checkTandHResponse.send(body)
    })
    .catch((error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
