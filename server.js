const mysql = require('mysql2');
const express = require('express')

const PORT = process.env.PORT || 3001;
    const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees_db',
    password : 'codingiskewl'
})


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
    