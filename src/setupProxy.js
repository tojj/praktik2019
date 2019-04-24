const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  let filter = function (pathname, req) {
    return pathname.startsWith('/json')
  }
  app.use(proxy(filter, { target: 'http://localhost:3001/' }))
}

