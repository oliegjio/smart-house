var init = (app) => {
    app.get('/fake-power-socket-off', (request, response) => {
        response.send('true')
    })
}

module.exports.init = init