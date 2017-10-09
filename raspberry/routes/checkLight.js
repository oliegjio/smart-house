var checkLightResponse

var init = (app) => {
  app.get('/checkLight', (request, response) => {
    checkLightResponse = response
    http.get('http://192.168.0.5/checkLight', (response) => {
      var data = ''

      response.on('data', (chunk) => {
        data += chunk
      })

      response.on('end', () => {
        checkLightResponse.send(data)
      })
    })
    .on('error', (error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
