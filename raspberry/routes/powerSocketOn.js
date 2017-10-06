var init = (app) => {
  app.get('http://192.168.0.140/onRelay', (request, response) => {
    response.send(response)
  })
}

module.exports.init = init
