
var express = require('express')
var app = express()

var output = "";

for (var i = 0; i < 100; i++) {

if (i % 3 === 0) {
output +=  i+ ": fizz" + "<br>" ;
}
if (i % 5 === 0) {
output += i+": buzz" + "<br>";
}
}

app.get('/', function (req, res) {
  res.send(output)
})

app.get('/bio', function (req, res) {
  res.send("This is my Bio")
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
