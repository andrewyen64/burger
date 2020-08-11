var mysql = require("mysql");


// MySQL DB Connection Info + JAWSDB_URL
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "Ay57435743",
        database : "burger_db",
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export connection to link to ORM
module.exports = connection;