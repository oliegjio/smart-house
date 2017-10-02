const http = require('http')
const requestPromise = require('request-promise')
const port = 8000

var rnd = () => {
    return Math.floor(Math.random() * (100 - 50) + 50)
}

var ping = (response) => {
    requestPromise({
        uri: 'http://192.168.0.140/',
        transform: (body, response) => {
            response.write(body)
            response.end()
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

var fakePing = (response) => {
    fakeData = `${rnd()} ${rnd()}\n`

    response.write(fakeData)
    response.end()
}

var wrongRequest = (response) => {
    response.write('Wrong Request!')
    response.end()
}

var powerSocketOff = (response) => {
    requestPromise({
        uri: 'http://192.168.0.140/offRelay',
        transform: (body, response) => {
            response.write(body)
            response.end()
        }
    })
}

var powerSocketOn = (response) => {
    requestPromise({
        uri: 'http://192.168.0.140/onRelay',
        transform: (body, response) => {
            response.write(body)
            response.end()
        }
    })
}

const requestHandler = (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")

    switch (request.url) {
        case '/ping':
            ping(response)
            break

        case '/fake-ping':
            fakePing(response)
            break

        case '/power-socket-off':
            powerSocketOff(response)
            break

        case '/power-socket-on':
            powerSocketOn(response)
            break

        default:
            wrongRequest(response)
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
    console.log('Listening to localhost:8000')
})
