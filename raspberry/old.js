var powerSocketOff = () => {
    requestPromise({
        uri: 'http://192.168.0.140/offRelay'
    })
    .then((body) => {
        globalResponse.write(body)
        globalResponse.end()
    })
}

var powerSocketOn = () => {
    requestPromise({
        uri: 'http://192.168.0.140/onRelay'
    })
    .then((body) => {
        globalResponse.write(body)
        globalResponse.end()
    })
}