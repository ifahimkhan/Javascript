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

     const createTableQuery = `CREATE TABLE Employee (
          Employee_Id INT NOT NULL UNIQUE AUTO_INCREMENT,
          Employee_Name VARCHAR(255) NOT NULL,
          Employee_Address VARCHAR(255),
          Employee_Position VARCHAR(255),
          Employee_Salary DECIMAL(10, 2),
          PRIMARY KEY (Employee_Id)
      )`;
    connection.query(createTableQuery, (err, result) => {
        if (err) throw err;
        console.log("Table 'Employee' created successfully!");
    });

    connection.end();
});
