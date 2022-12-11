const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "172.17.0.1",
  user: "cascha",
  password: "Pnqf@ju2",
  database: "react_map_news",
  port: 3306,
});

app.get("/api/get_ipc", (req, res) => {
  const sqlQuery = "select * from ipc;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get_ipc_mean", (req, res) => {
  const sqlQuery =
    "select region, round(AVG(ipc)) as ipc from ipc  where date >= ? AND date <= ? GROUP BY region;";
  db.query(sqlQuery, [req.query.minDate, req.query.maxDate], (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => console.log("running on port 3001"));
