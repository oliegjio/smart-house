var init = (app) => {
  app.get('http://192.168.0.2/offRelay', (request, response) => {
    response.send(response)
  })
}

module.exports.init = init
