const mysql = require('mysql2');
const inquirer = require("inquuirer")
const console_table = require("console.table");

const Stranger = require("./db/index.js");
const connection = require("./db/connections");

const strangerThings = new Stranger(connection)


    