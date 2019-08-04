
var express = require('express');
var bodyParser = require('body-parser');
var ConnectionFactory = require("./models/ConnectionFactory.js");

var app = express();

app.use(bodyParser.json());

app.post("/startups/", function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;

  var connection = ConnectionFactory.getConnection();

  connection.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO startups(name, email, phone) VALUES('" + name + "', '" + email + "', '" + phone + "')";

    connection.query(sql, function (err, result) {
      if (err) throw err;

      console.log("startup cadastrada.");

      res.send(JSON.stringify({ "message": "OK" }));

    });
  });

});


app.post("/investors/", function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;

  var connection = ConnectionFactory.getConnection();

  connection.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO investors(name, email, phone) VALUES('" + name + "', '" + email + "', '" + phone + "')";

    connection.query(sql, function (err, result) {
      if (err) throw err;

      console.log("investidor cadastrado.");

      res.send(JSON.stringify({ "message": "OK" }));

    });
  });

});

app.listen(3000, "10.128.0.2", function() {
  console.log("O servidor localhost está rodando na porta 3000.");

});
