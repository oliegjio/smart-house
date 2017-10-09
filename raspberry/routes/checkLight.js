var init = (app) => {
  app.get('http://192.168.0.5/checkLigth', (request, response) => {
    response.send(response)
  })
}

module.exports.init = init
