var init = (request, response, next) => {
    response.set('Access-Control-Allow-Origin', '*')
    next()
}

module.exports.init = init