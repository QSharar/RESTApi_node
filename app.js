var express  = require("express");
var app =  express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


//middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set db

mongoose.connect("mongodb://localhost/library");
const db = mongoose.connection;

db.on("open", () =>  console.log("db connected"));


db.on("error", err =>  console.log(err));
   


//set routes

var route = require("./route.js");
route(app);

app.listen(9000);
