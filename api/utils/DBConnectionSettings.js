"use strict";

var mysql = require('mysql');

var connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'FAMILY'
});

module.exports = {
    connection: connection
};