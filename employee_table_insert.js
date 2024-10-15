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

    const insertEmployeeQuery = `INSERT INTO Employee (Employee_Name, Employee_Address, Employee_Position, Employee_Salary)
        VALUES
        ('John Doe', '123 Main St', 'Manager', 12000),
        ('Jane Smith', '456 Oak St', 'Engineer', 9500),
        ('Peter Johnson', '789 Pine St', 'HR', 11000),
        ('Emily Davis', '101 Maple St', 'Sales', 10500),
        ('Chris Brown', '202 Willow St', 'Accountant', 13000),
        ('Jessica White', '303 Elm St', 'Technician', 9000),
        ('Michael Scott', '404 Birch St', 'Manager', 14000)`;

    connection.query(insertEmployeeQuery, (err, result) => {
        if (err) throw err;
        console.log("7 Employees inserted successfully!");
    });

    connection.end();
});
