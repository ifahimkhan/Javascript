const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Employee_DB'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to Employee_DB!");

    const selectQuery = `SELECT * FROM Employee`;

    connection.query(selectQuery, (err, results) => {
        if (err) throw err;
        console.log("Employee Details:", results);
    });

    connection.end();
});
