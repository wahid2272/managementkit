const db = require('./dbConfig');
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Register new user
const register = (req, res) => {
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
};

// Login verify
const getLogin = (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
};

// Login 
const postLogin = (req, res) => {
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
};

// Password reset
const passwordReset = (req, res) => {
  const username = req.body.username;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      // compare old and new password
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
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
};

// Get all user data
const getAllUser = (req, res) => {
  db.query(`SELECT * FROM users`, (err, results, fields) => {
    if(err) {
      res.send(err);
    }
    else{
      res.send(results);
    }
  });
};

module.exports = {
  register: register,
  getLogin: getLogin,
  postLogin: postLogin,
  passwordReset: passwordReset,
  getAllUser: getAllUser,
}
