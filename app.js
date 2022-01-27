var mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
