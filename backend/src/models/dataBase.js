const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'dbwebsearchengine'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Database connected");
});

module.exports = con;