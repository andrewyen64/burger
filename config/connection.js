var mysql = require("mysql");


// MySQL DB Connection Info + JAWSDB_URL
var connection = mysql.createConnection({
        host : "localhost",
        port : 3306,
        user : "root",
        password : "Ay57435743",
        database : "burger_db",
});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection to link to ORM
module.exports = connection;