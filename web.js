var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    ix_buf = fs.readFileSync('index.html');
    ix_msg = ix_buf.toString();

    response.send(ix_msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
