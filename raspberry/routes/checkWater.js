var checkWaterResponse

var init = (app) => {
  app.get('/checkWater', (request, response) => {
    checkWaterResponse = response
    http.get('http://192.168.0.3/checkWater', (response) => {
      var data = ''

      response.on('data', (chunk) => {
        data += chunk
      })

      response.on('end', () => {
        checkWaterResponse.send(data)
      })
    })
    .on('error', (error) => {
      console.log(error)
    })
  })
}

module.exports.init = init
