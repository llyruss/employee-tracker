const mysql = require('mysql2');
const inquirer = require("inquirer");
const express = require('express')

const PORT = process.env.PORT || 3001;
    const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_db',
    password : 'codingiskewl'
})

    