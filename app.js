const express = require('express');
const app = express();
app.use(express.json());

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db'
});

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Name and Email are required.');
    }

    const sql = `INSERT INTO users (name, email) VALUES (?, ?)`;

    connection.query(sql, [name, email], (err, result) => {
        if (err) throw err;
        res.send(`New user added with ID: ${result.insertId}`);
    });
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    const sql = `DELETE FROM users WHERE id = ?`;

    connection.query(sql, [userId], (err, result) => {
        if (err) throw err;

        if (result.affectedRows > 0) {
            res.send(`User with ID ${userId} deleted successfully.`);
        } else {
            res.status(404).send(`User with ID ${userId} not found.`);
        }
    });
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;

    const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;

    connection.query(sql, [name, email, userId], (err, result) => {
        if (err) throw err;

        if (result.affectedRows > 0) {
            res.send(`User with ID ${userId} updated successfully!`);
        } else {
            res.status(404).send(`User with ID ${userId} not found.`);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
