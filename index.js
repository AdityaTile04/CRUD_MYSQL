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

app.get("/employee/:id", (req, res) => {
  const { id } = req.params;
  connection.query(`SELECT * FROM employee WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log("Error in Database");
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.post("/employee", (req, res) => {
  const emp = req.body;
  const empData = [emp.name, emp.salary];
  const q = `INSERT INTO employee (name,salary) VALUES (?)`;
  connection.query(q, [empData], (err, result) => {
    if (err) {
      console.log("Some err in DB");
    } else {
      res.send(result);
      console.log(result);
      console.log("User Added Succesfully");
    }
  });
});

app.patch("/employee", (req, res) => {
  const emp = req.body;
  const q = `UPDATE employee SET ? WHERE id=${emp.id}`;
  connection.query(q, [emp], (err, result) => {
    if (err) {
      console.log("Some error in DB");
    } else {
      console.log(result);
      res.send(result);
      console.log("User updated succesfully");
    }
  });
});

app.put("/employee", (req, res) => {
  const emp = req.body;
  const q = `UPDATE employee SET ? WHERE id=${id}`;
  connection.query(q, [emp], (err, result) => {
    if (err) {
      console.log("Some error in DB");
    } else {
      if (result.affectedRows == 0) {
        const empData = [emp.name, emp.salary];
        const q = `INSERT INTO employee (name, salary) VALUES(?)`;
        connection.query(q, [empData], (err, result) => {
          if (err) {
            console.log("Some Error in DB");
          } else {
            console.log(`Added New User Succesfully`);
          }
        });
      }
    }
  });
});

app.delete("/employee/:id", (req, res) => {
  const { id } = req.params;
  connection.query(`DELETE FROM employee WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log("Some Error in DB");
    } else {
      res.send(result);
      console.log("User Deleted Succesfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
