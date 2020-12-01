const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("hello");
});

app.get("/contact", function(req, res){
  res.send("contact me");
});

app.get("/about", function(req, res) {
  res.send("about me");
});


app.get("/hobies", function(req, res) {
  res.send("hobies me");
});

app.listen(3000, function() {
  console.log("running");
});
