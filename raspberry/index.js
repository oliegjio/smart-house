const http = require('http')
const requestPromise = require('request-promise')
const port = 8000

var data
var globalResponse

var rnd = () => {
    return Math.floor(Math.random() * (100 - 50) + 50)
}

var sendDataNow = (globalResponse) => {
    requestPromise('http://192.168.0.141:8000/', (error, response, body) => {
        data = body
    })
    .then((globalResponse) => {
        globalResponse.setHeader("Access-Control-Allow-Origin", "*");
        console.log(data)
        globalResponse.write(data)
    })
}

var sendFakeData = (response) => {
    fakeData = `${rnd()} ${rnd()}\n`

    globalResponse.write(fakeData)
}

const requestHandler = (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    globalResponse = response
    switch (request.url) {
        case '/ping':
            console.log('ping')
            // sendDataNow(globalResponse)
            break
        case '/fake-ping':
            sendFakeData(response)
            break
        default:
            response.write('Wrong Request!')
    }
    globalResponse.end()
}

const server = http.createServer(requestHandler)

server.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
    console.log('Listening to localhost:8000')
})
