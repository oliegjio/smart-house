var init = (app) => {
  app.get('http://192.168.0.3/getWater', (request, response) => {
    response.send(response)
  })
}

module.exports.init = init
