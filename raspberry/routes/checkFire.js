var init = (app) => {
  app.get('http://192.168.0.4/checkFire', (request, response) => {
    response.send(response)
  })
}

module.exports.init = init
