const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Pnqf@ju2',
    database: 'news_analysis_db'
});

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO article_locations (id, lat, lng) VALUES (1, 3.31, 72.321);"
    db.query(sqlInsert, (err, result) => {
        console.log(err);
        console.log(result);
        res.send('hello, Cascha!')
    })
});

app.listen(3001, () => console.log("running on port 3001"));
