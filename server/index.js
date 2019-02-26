const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const app = express();

const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost:3001",
    user: "postgre",
    password: "admin",
    database: "birdwatcher"
  }
});
console.log(db.select("*").from("users"));

const database = {
  users: []
};

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  database.users.push({
    id: "1234",
    name,
    email,
    password
  });
  res.send("sucess");
});

app.post("/register", (req, res) => {
  bcrypt.hash("alouu", null, null, function(err, hash) {
    console.log(hash);
  });
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
