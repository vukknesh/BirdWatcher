const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const app = express();

const database = {
  users: [
    {
      id: 1,
      name: "leonardo",
      email: "leomcn@hotmail.com",
      password: "123"
    },
    {
      id: 2,
      name: "marina",
      email: "marina@hotmail.com",
      password: "marina"
    },
    {
      id: 3,
      name: "goran",
      email: "goran@hotmail.com",
      password: "goran"
    }
  ]
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
