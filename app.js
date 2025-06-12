
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const port = 3003;
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'payalpratu@3031',
    port: '3306',
    database: 'eventhall',
});

connection.connect((err) =>{
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }
    console.log('Database connected successfully');
});

app.get('/addVenue', (req, res) => {
    res.sendFile(path.join(___dirname, 'index.html'));
});

app.use(express.urlencoded({ extended: true }));

app.post('/addVenue', (req, res) => {
    const values = [name, email, password];
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting record:', err.stack);
            res.status(500).send('Error while inserting record');
        } else {
            console.log("Record inserted successfully||")
            res.send("Record inserted successfully||")
        }   
    });
});
app.listen(PORT, () => {
    console.log('server is running on http://localhost:${PORT}/');
});