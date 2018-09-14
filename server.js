var express = require("express");
var app = express();
var path = require('path'); 
var bodyParser = require ("body-parser");

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.static(path.join(__dirname, './app/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var data = {
	entries: [],
	friendsList: [], 
};




// Routes
// =============================================================
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

 // Displays all new entries
 app.get("/api/entries", function(req, res) {
    return res.json(entries);
  });

 // Displays all new reservations
 app.get("/api/friends", function(req, res) {
    return res.json(data.friendsList);
  });
  


    // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  