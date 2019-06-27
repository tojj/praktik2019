const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  let filter = function (pathname, req) {
    return pathname.startsWith('/api')
  }

  app.use(proxy(filter, { target: 'http://192.168.2.105:5000/' }))
}

