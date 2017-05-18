var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

function userAgentParse (string) {
  var start = string.indexOf("(")+1;
  var end = string.indexOf(")");
  return string.slice(start, end);
}

function ipParse (string) {
  if (string.includes("::ffff:") {
    console.log(string.slice(6, string.length-1));
    return string.slice(6, string.length-1);
  }
  return string;
}



app.get('/', function(req, res){

  var str = userAgentParse(req.headers['user-agent']);

  var ipStr = ipParse(req.ip);

  var obj = {"ipaddress": ipStr,
            "language": req.acceptsLanguages()[0],
            "software": str
          }
  res.send(obj);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
