var checkOnRelayResponse

var init = (app) => {
  app.get('/onRelay', (request, response) => {
    checkOnRelayResponse = response
    http.get('http://192.168.0.2/onRelay', (response) => {
      var data = ''

      response.on('data', (chunk) => {
        data += chunk
      })

      response.on('end', () => {
        checkOnRelayResponse.send(data)
      })
    })
    .on('error', (error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
