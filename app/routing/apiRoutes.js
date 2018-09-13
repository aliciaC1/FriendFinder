 // dependencies
// =============================================================
var path = require('path'); 
var express = require("express");
var app = express();

 
// Import the list of friend entries
// =============================================================
var array = require('../data/friends.js');
 
 
 // Displays all new entries
 app.get("/api/entries", function(req, res) {
    return res.json(entries);
  });

 // Displays all new reservations
 app.get("/api/friends", function(req, res) {
    return res.json(data.friendsList);
  });