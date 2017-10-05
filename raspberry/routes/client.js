var init = (app) => {
    app.get('/client', (request, response) => {
        response.render('index.html')
    })
}

module.exports.init = init