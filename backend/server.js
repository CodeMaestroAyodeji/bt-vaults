const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup_db"
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Error signing up', error: err });
        } else {
            res.status(200).send({ message: 'Signup successful' });
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Login failed', error: err });
        } else if (result.length > 0) {
            res.status(200).send({ message: 'Login successful' });
        } else {
            res.status(401).send({ message: 'Invalid email or password' });
        }
    });
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
