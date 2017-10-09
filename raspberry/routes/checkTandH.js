var checkTandHResponse

var init = (app) => {
  app.get('/checkTandH', (request, response) => {
    checkTandHResponse = response
    http.get('http://192.168.0.6/checkTandH', (response) => {
      var data = ''

      response.on('data', (chunk) => {
        data += chunk
      })

      response.on('end', () => {
        checkTandHResponse.send(data)
      })
    })
    .on('error', (error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
