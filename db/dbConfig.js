const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const db = mysql.createConnection({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MySQL Connected...");
  }
});

module.exports = db;

