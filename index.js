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

app.listen(3001, () => console.log(`Server Running`));
