const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var cal = num1 + num2;
  res.send("Answer is: " + cal);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
  var h = parseFloat(req.body.h);
  var w = parseFloat(req.body.w);
  var cal = w / (h * h);
  res.send("Your BMI is: " + cal);
});

app.listen(3000, function() {
  console.log("running");
});
