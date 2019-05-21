const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const nodemailer = require('nodemailer')

const CreateRestRoutes = require('./CreateRestRoutes')
const { db_host, port, mail } = require('./config/keys')

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
    // app.use(express.static(`${__dirname}/build`));

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
      fundraisers: require('./models/Fundraiser'),
      qnas: require('./models/Qna')
    };

    global.models = models

    new CreateRestRoutes(app, global.db, models)
    
    app.post('/json/send', function (req, res, next) {
      const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 465,
        secure: true,
        auth: {
          user: 'apikey',
          pass: mail
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

    app.use(express.static(path.join(__dirname, 'build')));

    app.all('/json/*', (req, res) => {
      res.json({ url: req.url, ok: true })
    })
    
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    const server = http.Server(app)
    server.listen(port, () => console.log(`Tojj Server is on port ${port}`))
  }

}

new Server()
