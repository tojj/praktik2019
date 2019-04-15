const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const bodyParser = require('body-parser')
const CreateRestRoutes = require('./CreateRestRoutes')
const supersecret = require('./supersecret')



module.exports = class Server {
  constructor() {
    this.start()
  }

  async start() {
    await this.connectToDb();
    await this.startWebServer()
  }
  
  connectToDb() {
    return new Promise((resolve, reject) => {
      mongoose.connect(supersecret, { useNewUrlParser: true });
      global.db = mongoose.connection;
      db.on("error", () => reject("Could not connect to DB"));
      db.once("open", () => resolve("Connected to DB"));
    });
  }

  /**
   * Startar webbservern åt oss. 
   */

  startWebServer() {

    const app = express()

    app.use(bodyParser.json());

    const models = {
      users: require('./models/User'),
      fundraisers: require('./models/Fundraiser')
    };

    global.models = models;

    new CreateRestRoutes(app, global.db, models);

    app.all('/json/*', (req, res) => {
      res.json({ url: req.url, ok: true })
    })

    const server = http.Server(app)
    server.listen(3001, () => console.log('Tojj Server is on port 3001'))

  }

}