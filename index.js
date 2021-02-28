const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      express: 60 * 60 * 5,
    },
  })
);

const db = mysql.createConnection({
  user: "asiaexchange",
  host: "localhost",
  password: "pass123",
  database: "student_portal",
});

// const db = mysql.createConnection({
//   user: "cpses_aa44vptbtc@localhost",
//   host: "localhost",
//   password: "tWmZptg75jop",
//   database: "aansianva_wahid",
// });

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "insert into users (username, password) values (?, ?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if(req.session.user) {
    res.send({loggedIn: true, user: req.session.user})
  } else {
    res.send({loggedIn: false})
  }
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "select * from users where username = ?",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            res.status(200).send(result);
          } else {
            res.send({ message: "Wrong username/password combination" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist. Please register." });
      }
    }
  );
});

app.listen(3005, () => console.log(`Server Running`));
