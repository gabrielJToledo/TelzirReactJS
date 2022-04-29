const mysql = require('mysql2');
require('dotenv').config()

var con = mysql.createConnection({
  host: process.env.IP_LOCALHOST,
  port: 3310,
  user: "root",
  password: "987412365"
});

module.exports = { con }