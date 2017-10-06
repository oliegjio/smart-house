var init = (app) => {
  app.get('/client', (request, response) => {
    response.render('index.ejs')
  })
}

module.exports.init = init
