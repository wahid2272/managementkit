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
const port = process.env.PORT || 3005;

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
app.post("/api/register", query.register);

// login successful 
app.get("/login", query.getLogin);

// send login data to verify from DB
app.post("/login", query.postLogin);

// user password reset
app.post("/api/reset-password", query.passwordReset);

// get all users from database
app.get('/api/getAllUser', query.getAllUser);

// get all study info from database
app.get('/api/getAllStudyInfo', infoQuery.getStudyInfo);

// add new study info into database
app.post('/api/addNewInfo', infoQuery.addNewStudyInfo);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
