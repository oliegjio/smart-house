const express = require('express')
const path = require('path')
// const bodyParser = require('body-parser')
// const request = require('request')
// const requestPromise = require('request-promise')

const port = 8000
const app = express()

app.use(require('../middlewares/crossOrigin').init)
app.use(express.static(path.join(__dirname, '..', 'public')))

app.engine('ejs', require('ejs').renderFile)

app.set('views', path.join(__dirname, '..', 'public', 'views'))
app.set('view engine', 'html')

require('../routes/fakePing').init(app)
require('../routes/fakePowerSocketOn').init(app)
require('../routes/fakePowerSocketOff').init(app)
require('../routes/client').init(app)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  }
  console.log('Listening to localhost:8000')
})

module.exports.app = app
