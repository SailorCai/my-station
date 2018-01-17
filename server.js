var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function(req, res){
  res.send('hello world');
});

var server = app.listen(3001, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为http://%s%s', host, port);
});