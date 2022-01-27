var mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query(
  "SELECT * FROM `city` WHERE `Name` = ?",
  ["Kabul"],
  function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
    console.log(results);
  }
);
