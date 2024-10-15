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

    const joinQuery = `SELECT e.Employee_Name, e.Employee_Position, ep.Employee_Profile, e.Employee_Salary
                       FROM Employee e
                       JOIN Employee_Profile ep ON e.Employee_Id = ep.Employee_Id`;

    connection.query(joinQuery, (err, results) => {
        if (err) throw err;
        console.log("Employee Details with Profile:", results);
    });

    connection.end();
});
