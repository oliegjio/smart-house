var checkOffRelayResponse

var init = (app) => {
  app.get('/offRelay', (request, response) => {
    checkOffRelayResponse = response
    http.get('http://192.168.0.2/offRelay', (response) => {
      var data = ''

      response.on('data', (chunk) => {
        data += chunk
      })

      response.on('end', () => {
        checkOffRelayResponse.send(data)
      })
    })
    .on('error', (error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
