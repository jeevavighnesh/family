"use strict";

var mysql = require('mysql');

var connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'pass123$',
    database: 'FAMILY'
});

module.exports = {
    connection: connection
};
