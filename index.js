const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const app = express();

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "asiaexchange",
  host: "localhost",
  password: "pass123",
  database: "student_portal",
});

app.post("/register", (req, res) => {

    const username = req.body.username
    const password = req.body.password

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if(err){
      console.log(err);
    }
    
    db.query(
    "insert into users (username, password) values (?, ?)",
    [username, hash],
    (err, result) => {
      console.log(err);
    }
  );
  })
  
});

app.post('/login', (req, res) =>{
    const username = req.body.username
    const password = req.body.password

  db.query(
    "select * from users where username = ?",
    username,
    (err, result) => {
        if(err){
            res.send({err: err});
        }

        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
              if(response) {
                res.status(200).send(result);
              }
              else {
                res.send({message: "Wrong username/password combination"})
              }
            })
        }else {
            res.send({message: "User doesn't exist. Please register."})
        }
    }    
  );
})

app.listen(3005, () => console.log(`Server Running`));
