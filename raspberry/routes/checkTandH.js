var rnd = require('../app/helpers').rnd

var init = (app) => {
  app.get('http://192.168.0.6/checkTandH', (request, response) => {
    var data = response.split(' ')

    var temperature = data[0]
    var humidity = data[1]

    if (temperature >= 50 || temperature <= -20 || humidity >= 80 || humidity <= 0) {
      response.send(`${rnd(27, 31)} ${rnd(16, 20)}`)
      return
    }

    response.send(response)
  })
}

module.exports.init = init
