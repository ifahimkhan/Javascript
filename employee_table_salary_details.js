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

    const salaryQuery = `SELECT Employee_Name, Employee_Position, Employee_Salary
                         FROM Employee
                         WHERE Employee_Salary > 10000
                         ORDER BY Employee_Salary ASC`;

    connection.query(salaryQuery, (err, results) => {
        if (err) throw err;
        console.log("Employees with salary > 10000 in ascending order:", results);
    });

    connection.end();
});
