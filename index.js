var connect = require('connect');
var prism = require('connect-prism');
var http = require('http');

prism.create({
  name: 'api',
  context: '/api',
  host: 'localhost',
  port: 8080,
  mode: 'mockrecord'
});

var app = connect()
  .use(prism.middleware)

http.createServer(app).listen(3000);