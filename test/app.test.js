var app = require('../app'),
  assert = require('assert'),
  http = require('http');

describe('GET /', function(){
  before(function() {
      var port = '3001';
      app.set('port', port);
      var server = http.createServer(app);
      server.listen(port);
  });
});
