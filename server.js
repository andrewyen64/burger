// Sets up express/port for the app
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// Serves static content for the app from the "public" directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgerController.js");

app.use(routes);

// LISTENER: Starts server so that it listen to client requests
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});