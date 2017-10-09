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

require('../routes/checkTandH').init(app)
require('../routes/onRelay').init(app)
require('../routes/offRelay').init(app)
require('../routes/checkLight').init(app)
require('../routes/checkFire').init(app)
require('../routes/checkWater').init(app)
require('../routes/client').init(app)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  }
  console.log('Listening to localhost:8000')
})

module.exports.app = app
