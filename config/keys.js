// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
   db_host: process.env.REACT_APP_DB_HOST,
   mail: process.env.REACT_APP_MAIL_SECRET,
   port: process.env.PORT || process.env.REACT_APP_SERVER_PORT
};
