const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const app = express();

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

  db.query(
    "insert into users (username, password) values (?, ?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post('/login', (req, res) =>{
    const username = req.body.username
    const password = req.body.password

  db.query(
    "select * from users where username = ? and password = ?",
    [username, password],
    (err, result) => {
        if(err){
            res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result)
        }else {
            res.send({message: "Wrong username/password combination"})
        }
    }    
  );
})

app.listen(3005, () => console.log(`Server Running`));
