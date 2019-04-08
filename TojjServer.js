const express = require('express')
const mongoose = require('mongoose')
const http = require('http')

module.exports = class Server {
  constructor() {
    this.start()
  }

  async start(){
    await this.startWebServer()
  }

  /**
   * Startar webbservern åt oss. 
   */

  startWebServer() {

    const app = express()

    app.all('/json/*', (req, res) => {
      res.json({ url: req.url, ok: true })
    })

    const server = http.Server(app)
    server.listen(3001, () => console.log('Tojj Server is on port 3001'))

  }

}