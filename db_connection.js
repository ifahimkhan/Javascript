const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db'
});
 
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

const sql = `CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
)`;

// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log('Table created');
// });

const insertSql = "INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')";
connection.query(insertSql, (err, result) => {
    if (err) throw err;
    console.log('Record inserted');
});

connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log(results);
});

const updateDataSql = "UPDATE users SET email = 'newemail@example.com' WHERE name = 'John Doe'";
connection.query(updateDataSql, (err, result) => {
    if (err) throw err;
    console.log('Record updated');
});


// const deleteSql = "DELETE FROM users WHERE name = 'John Doe'";
// connection.query(deleteSql, (err, result) => {
//     if (err) throw err;
//     console.log('Record deleted');
// });

