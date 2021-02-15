const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: dummy,
    host: dummy,
    password:dummy,
    database:dummy
});


app.listen(3000, ()=> console.log(`Server Running`));
