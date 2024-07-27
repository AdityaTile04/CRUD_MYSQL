const connection = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.get("/employee", (req, res) => {
  connection.query("SELECT * FROM employee", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
