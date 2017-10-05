const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request')
const requestPromise = require('request-promise')

const port = 8000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public', 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

var crossOrigin = (request, response, next) => {
    response.set('Access-Control-Allow-Origin', '*')
    next()
}
app.use(crossOrigin)

var fakePowerSocketOn = () => {
    globalResponse.write('true')
    globalResponse.end()
}

var fakePowerSocketOff = () => {
    globalResponse.write('true')
    globalResponse.end()
}

require('./routes/fakePing').init(app)
require('./routes/fakePowerSocketOn').init(app)
require('./routes/fakePowerSocketOff').init(app)

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
    console.log('Listening to localhost:8000')
})

module.exports.app = app