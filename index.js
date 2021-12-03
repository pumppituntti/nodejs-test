const express = require("express");
const app = express();
const mysql = require("mysql");

const port = process.env.PORT || 8080;

var cors = require("cors");
app.use(cors());

const db = [{ name: "tiina" }, { name: "jack" }];

let config = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
};

var pool = mysql.createPool(config);
app.get("/", (req, res) => {
  pool.query("SELECT * from locations", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

app.get("/names", (req, res) => {
  res.send(db);
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
