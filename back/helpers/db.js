const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // username
  password: "Chandni_13",
  database: "my_db",
});
module.exports = connection;
