const http = require('http')
const SerialPort = require('serialport')
const stringDecoder = require('string_decoder')
// const sqlite = require('sqlite3')
const port = 8000

const decoder = new stringDecoder.StringDecoder('utf8')

// var db = new sqlite.Database('./data.db')
// db.run('CREATE TABLE IF NOT EXISTS t-and-h (date DATETIME, t, h)')
// db.on('error', (error) => {
//     console.log(error)
// })

var sPort = new SerialPort('/dev/ttyUSB0', {baudRate: 9600})

var rnd = () => {
    return Math.floor(Math.random() * (100 - 50) + 50) // (to - from) + from
}

var newData

sPort.on('data', (data) => {
    // temperature humidity
    newData = decoder.write(data).replace(/(\r\n|\n|\r)/gm,'')

    console.log(newData)
})

var getTH = () => {
    sPort.write('0', function(error) {
      if (error) {
        return console.log(error.message)
      }
    })
}
setInterval(getTH, 1000)

sPort.on('error', (error) => {
    console.log(error)
})

var sendData = (response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.write(newData)
}

const requestHandler = (request, response) => {
    switch (request.url) {
        case '/ping':
            sendData(response)
            break
        default:
            response.write('Wrong Request!')
    }
    response.end()
}

const server = http.createServer(requestHandler)

server.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
    console.log('Listening to localhost:8000')
})
