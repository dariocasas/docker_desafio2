const express = require('express');
const mysql = require('mysql');
const formidableMiddleware = require('express-formidable');


const app = express();
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'mysqldb'
}

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(formidableMiddleware());

app
    .get('/', (req, res) => {
        res.render('home', { users: [], msg: '' });
    })
    .post('/', (req, res) => {

        var users = [];
        const username = req.fields.username;
        const connection = mysql.createConnection(config);

        connection.connect((err) => {

            if (err) {
                res.render('home', { users: [], msg: err.message });
            } else {

                if (username !== '') {
                    const sql = 'INSERT INTO user VALUES (NULL, "' + username + '")';
                    connection.query(sql, (err) => {

                        if (err) {
                            res.render('home', { users: [], msg: err.message });
                        } else {

                            connection.query('SELECT * FROM user', (err, result, fields) => {
                                var msg = '';
                                if (err) msg = err.message
                                res.render('home', { users: result, msg: msg });
                            });
                        }
                    });
                }
            }

        });

        connection.end;

    })
    .listen(3000, () => {
        console.log('rodando em :3000');
    });


