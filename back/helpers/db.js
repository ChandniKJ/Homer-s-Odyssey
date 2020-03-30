const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "", // username
  password: "",
  database: "my_db"
});
module.exports = connection;
