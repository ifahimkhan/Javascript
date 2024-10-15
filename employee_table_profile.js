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

    const createProfileTableQuery = `CREATE TABLE Employee_Profile (
        Employee_Id INT NOT NULL,
        Employee_Profile VARCHAR(255),
        Employee_Name VARCHAR(255),
        PRIMARY KEY (Employee_Id),
        FOREIGN KEY (Employee_Id) REFERENCES Employee(Employee_Id)
    )`;

    connection.query(createProfileTableQuery, (err, result) => {
        if (err) throw err;
        console.log("Table 'Employee_Profile' created successfully!");
    });

    connection.end();
});
