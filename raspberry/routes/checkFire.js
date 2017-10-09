var checkFireResponse

var init = (app) => {
  app.get('/checkFire', (request, response) => {
    checkFireResponse = response
    http.get('http://192.168.0.4/checkFire', (response) => {
      var data = ''

      response.on('data', (chunk) => {
        data += chunk
      })

      response.on('end', () => {
        checkFireResponse.send(data)
      })
    })
    .on('error', (error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
