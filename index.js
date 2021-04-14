const express = require("express");
const cors = require("cors");

//Import BD configuration
const db = require('./dbConfig');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

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
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
  );

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            // console.log(req.session.user);
            res.send(result);
          } else {
            res.status(401).send("Unauthorised")
          }
        });
      } else {
        res.status(401).send("User not exist")
      }
    }
  );
});

app.post("/reset-password", (req, res) => {
  const username = req.body.username;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const confirmNewPassword = req.body.confirmNewPassword;

  //console.log(username, oldPassword, newPassword, confirmNewPassword);

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      // console.log(result)

      if (result.length > 0) {
        bcrypt.compare(oldPassword, result[0].password, (error, response) => {
          if (response) {
            
            bcrypt.hash(newPassword, saltRounds, (err, hash) => {
              if (err) {
                console.log(err);
              }
          
              db.query(
                "UPDATE users SET password = ? where username = ?",
                [hash, username],
                (err ) => {
                  console.log(err);
                }
              );
            });

            // res.send(result);
            console.log(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
})

app.listen(3005, () => {
  console.log("Server running at port 3005");
});
