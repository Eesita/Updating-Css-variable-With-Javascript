var express = require('express');
var app = express();

var absolutePath = __dirname + '/index.html';
app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});