const mysql = require("mysql");


// MySQL DB Connection Info + JAWSDB_URL
const connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host : "localhost",
        port : 3306,
        user : "root",
        password : "Ay57435743",
        database : "burgers_db",
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