const mongoose = require("mongoose");
const { db } = require("./models/pizzaModel");

var mongoURL = "mongodb+srv://nishantpatel1107:nishant2000@cluster0.bgevmfg.mongodb.net/Foodlicious";

const uri = "mongodb+srv://nishantpatel1107:nishant2000@cluster0.bgevmfg.mongodb.net/Foodlicious";
mongoose.connect(uri, (err) => {
  if (err) throw err;
  console.log("connected...");
});

module.exports = db;
