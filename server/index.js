const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const app = express();

const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "birdwatcher"
  }
});

db.select("*")
  .from("users")
  .then(data => {});

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send();
});

app.post("/signin/", (req, res) => {
  db.select("email", "hash")
    .from("login")
    .where("email", "=", req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      console.log(isValid);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then(user => {
            res.json(user[0]);
          })
          .catch(err => {
            res.status(400).json("unable to get user");
          });
      } else {
        res.status(400).json("invalid password or email");
      }
    })
    .catch(err => res.status(400).json("wrong pass or email"));
});

app.post("/facebook/", (req, res) => {
  db.select("email")
    .from("login")
    .where("email", "=", req.body.email)
    .then(data => {
      if (data) {
        console.log(data);
        return db
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then(user => {
            res.json(user[0]);
            console.log("usuario " + user[0]);
          })
          .catch(err => {
            console.log("unable");
            res.status(400).json("unable");
          });
      } else {
        res.status(400).json("invalid");
        console.log("invalid");
      }
    })
    .catch(err => res.json("wrong"));
  console.log("wrong");
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  const hash = bcrypt.hashSync(password);
  db.transaction(trx => {
    trx
      .insert({
        hash: hash,
        email: email
      })
      .into("login")
      .returning("email")
      .then(loginEmail => {
        return trx("users")
          .returning("*")
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
          .then(user => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json("email alredy exists"));
});

app.post("/registerfacebook/", (req, res) => {
  const { email, name } = req.body;

  db.transaction(trx => {
    trx
      .insert({
        email: email
      })
      .into("login")
      .returning("email")
      .then(loginEmail => {
        return trx("users")
          .returning("*")
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
          .then(user => {
            res.json(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json("email alredy exists"));
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;

  db.select("*")
    .from("users")
    .where({ id: id })
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("not found");
      }
    })
    .catch(err => res.status(400).json("error getting user"));
});

app.post("/image/", (req, res) => {
  const { id } = req.body;
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
