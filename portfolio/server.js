const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portfolio"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected");
});

app.get('/projects', (req, res) => {
    db.query("SELECT * FROM projects", (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Save contact
app.post('/contact', (req, res) => {
    const {name, email} = req.body;
    db.query("INSERT INTO contacts (name, email) VALUES (?, ?)", 
    [name, email], 
    (err, result) => {
        if (err) throw err;
        res.send("Message Saved!");
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));