var init = (app) => {
  app.get('/fake-power-socket-on', (request, response) => {
    response.send('true')
  })
}

module.exports.init = init
