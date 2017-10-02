const http = require('http')
const requestPromise = require('request-promise')
const port = 8000

var pingResponse
var powerSocketResponse

var rnd = () => {
    return Math.floor(Math.random() * (100 - 50) + 50)
}

var ping = () => {
    requestPromise({
        uri: 'http://192.168.0.140/',
        transform: (body) => {
            pingResponse.write(body)
            pingResponse.end()
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

var fakePing = () => {
    fakeData = `${rnd()} ${rnd()}\n`

    pingResponse.write(fakeData)
    pingResponse.end()
}

var wrongRequest = (response) => {
    response.write('Wrong Request!')
    response.end()
}

var powerSocketOff = () => {
    requestPromise({
        uri: 'http://192.168.0.140/offRelay',
        transform: (body) => {
            powerSocketResponse.write(body)
            powerSocketResponse.end()
        }
    })
}

var powerSocketOn = () => {
    requestPromise({
        uri: 'http://192.168.0.140/onRelay',
        transform: (body) => {
            powerSocketResponse.write(body)
            powerSocketResponse.end()
        }
    })
}

const requestHandler = (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")

    switch (request.url) {
        case '/ping':
            pingResponse = response
            ping()
            break

        case '/fake-ping':
            pingResponse = response
            fakePing()
            break

        case '/power-socket-off':
            powerSocketResponse = response
            powerSocketOff()
            break

        case '/power-socket-on':
            powerSocketResponse = response
            powerSocketOn()
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
