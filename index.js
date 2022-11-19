const mysql = require('mysql2');
const console_table = require("console.table")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees_db',
    password : 'codingiskewl'
})


    