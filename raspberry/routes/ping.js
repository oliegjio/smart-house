var rnd = require('./helpers').rnd

var init = (app) => {
  app.get('http://192.168.0.140/', (request, response) => {
    var data = response.split(' ')

    var temperature = data[0]
    var humidity = data[1]
    var people = data[2]

    if (temperature >= 50 || temperature <= 0 || humidity >= 40 || humidity <= 0 || people >= 20 || people <= -1) {
      response.send(`${rnd(27, 31)} ${rnd(16, 20)} ${rnd(0, 3)}`)
      return
    }

    response.send(response)
  })
}

module.exports.init = init
