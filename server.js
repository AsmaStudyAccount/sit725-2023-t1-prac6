var express = require("express");
var app = express();
var cardsController = require("./controllers/cardsControllers");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Delegate the route handling to the controller
app.get("/api/cards", cardsController.getCardData);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});

module.exports = app;
