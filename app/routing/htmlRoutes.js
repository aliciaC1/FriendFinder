// dependencies
// =============================================================
var path = require('path'); 
var express = require("express");
var app = express();


// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

// Export HTML routes
// =============================================================
module.exports = function(app) {
