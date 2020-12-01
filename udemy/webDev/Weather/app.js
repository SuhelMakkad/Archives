const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {

  const qurey = req.body.cityName;
  const apiKey = "b482e67657507539dc367bc1e7469c0e";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + qurey + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, function (response) {

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDis = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const urlIcon = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
      res.write("<p>The weather is currently " + weatherDis + "</p>");
      res.write("<h1>Temp in " + qurey + " is currently " + temp +" degree celciues </h1>");
      res.write("<img src=" + urlIcon + ">");
    });
  });
});

app.listen(3000, function() {
  console.log("server is up and running");
});
