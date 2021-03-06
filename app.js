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
    console.log(results);
  }
);

/*con.query("SELECT * FROM `city`", function (error, results, fields) {
  console.log(results);
});*/

con.query("SELECT * FROM `city`", function (error, results, fields) {
  console.log(results[90]);
});

con.query("SELECT * FROM `city`", function (error, results, fields) {
  console.log(fields);
  console.log(fields[1].name);
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM city ORDER BY name LIMIT 5", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
