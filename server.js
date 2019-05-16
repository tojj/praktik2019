const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const bodyParser = require('body-parser')
const CreateRestRoutes = require('./CreateRestRoutes')
const { db_host, port } = require('./config/keys');

class Server {
  constructor() {
    this.start()
  }

  async start() {
    await this.startWebServer()
  }

  /**
   * Startar webbservern åt oss.
   */
  startWebServer() {

    const app = express()
    app.use(express.static(`${__dirname}/build`));

    app.use(bodyParser.json())

   // Connect to DB.
   mongoose.connect(db_host, { useNewUrlParser: true })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err));

   global.db = mongoose.connection

    const models = {
      users: require('./models/User'),
      events: require('./models/Event'),
      products: require('./models/Product'),
      fundraisers: require('./models/Fundraiser')
    };

    global.models = models

    new CreateRestRoutes(app, global.db, models)

    app.all('/json/*', (req, res) => {
      res.json({ url: req.url, ok: true })
    })

    const server = http.Server(app)
    server.listen(port, () => console.log(`Tojj Server is on port ${port}`))
  }

}

new Server()
