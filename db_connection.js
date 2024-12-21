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

const dropSql = `DROP TABLE IF EXISTS users`

connection.query(dropSql, (err, res) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(`table dropped users`)
    console.log(res);

})
const sql = `CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
)`;

connection.query(sql, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Table created');
    console.log(result);

});

const insertSql = "INSERT INTO users (name, email) VALUES ('Fahim khan', 'heyfahim@gmail.com')";
connection.query(insertSql, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Record inserted');
    console.log(result);

});

connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(results);
});

const updateDataSql = "UPDATE users SET email = 'i_fahimkhan@hotmail.com' WHERE name = 'Fahim khan'";
connection.query(updateDataSql, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Record updated');
    console.log(result);

});


const deleteSql = "DELETE FROM users WHERE name = 'Fahim khan'";
connection.query(deleteSql, (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Record deleted');
});

