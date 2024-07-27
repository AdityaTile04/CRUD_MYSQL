const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employeedb",
  password: "aditya",
});

const connection = mysqlConnection.connect((err) => {
  if (err) {
    console.log("Error to connect database");
  } else {
    console.log(`Database connected succesfully`);
  }
});

module.exports = connection;
