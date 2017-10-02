const http = require('http')
const requestPromise = require('request-promise')
const port = 8000

var globalResponse

var rnd = () => {
    return Math.floor(Math.random() * (100 - (-50)) + (-50))
}

var rnd2 = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

var ping = () => {
    requestPromise({
        uri: 'http://192.168.0.140/',
        transform: (body) => {
            var data = body.split(' ')
            var temperature = data[0]
            var humidity = data[1]

            if(temperature >= 50 || temperature <= 0 ||
               humidity >= 40 || humidity <= 0) {
                globalResponse.write(`${rnd2(28, 30)} ${rnd2(17, 19)}`)
                globalResponse.end()
                return
            }

            globalResponse.write(body)
            globalResponse.end()
        }
    })
}

var fakePing = () => {
    fakeData = `${rnd()} ${rnd()}\n`

    globalResponse.write(fakeData)
    globalResponse.end()
}

var wrongRequest = (globalResponse) => {
    globalResponse.write('Wrong Request!')
    globalResponse.end()
}

var powerSocketOff = () => {
    requestPromise({
        uri: 'http://192.168.0.140/offRelay',
        transform: (body) => {
            globalResponse.write(body)
            globalResponse.end()
        }
    })
}

var powerSocketOn = () => {
    requestPromise({
        uri: 'http://192.168.0.140/onRelay',
        transform: (body) => {
            globalResponse.write(body)
            globalResponse.end()
        }
    })
}

const requestHandler = (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*")
    globalResponse = response

    switch (request.url) {
        case '/ping':
            ping()
            break

        case '/fake-ping':
            fakePing()
            break

        case '/power-socket-off':
            powerSocketOff()
            break

        case '/power-socket-on':
            powerSocketOn()
            break

        default:
            wrongRequest()
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
    console.log('Listening to localhost:8000')
})
