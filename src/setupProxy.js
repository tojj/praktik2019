const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  let filter = function (pathname, req) {
    return pathname.startsWith('/api')
  }

  app.use(proxy(filter, { target: 'http://127.0.0.1:5000' }))
}

