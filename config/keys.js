// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
   db_host: process.env.DB_HOST,
   mail: process.env.MAIL_SECRET,
   port: process.env.SERVER_PORT
};
