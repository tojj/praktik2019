const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const settings = require('./settings.json');
const CreateRestRoutes = require('./CreateRestRoutes')
const LoginHandler = require('./LoginHandler')
const nodemailer = require('nodemailer')
const path = require('path');
require('dotenv').config()


module.exports = class Server {
  constructor() {
    this.start()
  }

  async start() {
    await this.connectToDb()
    await this.startWebServer()
  }

  connectToDb() {
    return new Promise((resolve, reject) => {      
      mongoose.connect(process.env.MONGO_API, { useNewUrlParser: true })
      global.db = mongoose.connection
      global.passwordSalt = settings.passwordSalt;
      db.on("error", () => reject("Could not connect to DB"))
      db.once("open", () => resolve("Connected to DB"))
    })
  }

  /**
   * Startar webbservern åt oss. 
   */

  startWebServer() {

    const app = express()

    app.use(bodyParser.json())
    
    // app.use(express.static(path.join(__dirname, 'build')));


    app.use(session({
      secret: settings.cookieSecret,
      resave: true,
      saveUninitialized: true,
      store: new MongoStore({
        mongooseConnection: global.db
      })
    }));

    const models = {
      users: require('./models/User'),
      events: require('./models/Event'),
      products: require('./models/Product'),
      fundraisers: require('./models/Fundraiser'),
      qnas: require('./models/Qna')
    }

    global.models = models


    new CreateRestRoutes(app, global.db, models)

    new LoginHandler(app, models.users);



    app.post('/json/send', function (req, res, next) {
      const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 465,
        secure: true,
        auth: {
          user: 'apikey',
          pass: process.env.MAIL_API
        },
        tls: {
          rejectUnauthorized: false
        }
      })

      const mailOptions = {
        from: `"Tojj" <tojjinfo@gmail.com>`,
        to: `${req.body.email}`,
        subject: `${req.body.subject}`,
        html: `${req.body.message}`
      }
      transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
          console.error('there was an error: ', err);
        } else {
          console.log('here is the res: ', res)
        }
      })
    })
    app.all('/json/*', (req, res) => {
      res.json({ url: req.url, ok: true })
    })
    
    const server = http.Server(app)
    server.listen(3001, () => console.log('Tojj Server is on port 3001'))

  }

}