var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

function userAgentParse (string) {
  var start = string.indexOf("(")+1;
  var end = string.indexOf(")");
  return string.slice(start, end);
}

app.get('/', function(req, res){

  var str = userAgentParse(req.headers['user-agent']);

  var obj = {"ipaddress":req.ip,
            "language":req.acceptsLanguages()[0],
            "software": str
          }
  res.send(obj);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
