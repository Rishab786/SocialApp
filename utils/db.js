const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "userdb",
  password: "Rishab@123",
});

module.exports = pool.promise();
