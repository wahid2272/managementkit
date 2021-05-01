const express = require("express");
const cors = require("cors");
const query = require('./db/users');
const infoQuery = require('./db/studyInfo');

//Import BD configuration
const db = require('./db/dbConfig');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// const bcrypt = require("bcrypt");
// const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
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

// Register new user
app.post("/register", query.register);

// login successful 
app.get("/login", query.getLogin);

// send login data to verify from DB
app.post("/login", query.postLogin);

// user password reset
app.post("/reset-password", query.passwordReset);

// get all users from database
app.get('/getAllUser', query.getAllUser);

// get all study info from database
app.get('/getAllStudyInfo', infoQuery.getStudyInfo);

app.listen(3005, () => {
  console.log("Server running at port 3005");
});
