const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL!");
    
    const createDatabaseQuery = 'CREATE DATABASE Employee_DB';
    connection.query(createDatabaseQuery, (err, result) => {
        if (err) {
        console.log(err)
        return
        }
        console.log("Database 'Employee_DB' created successfully!");
    });

    connection.end();
});
