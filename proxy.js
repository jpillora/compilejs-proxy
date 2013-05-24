var httpProxy = require('http-proxy');

var hosts = [
  'compilejs-1.herokuapp.com',
  'compilejs-2.herokuapp.com'
];

var server = httpProxy.createServer(function (req, res, proxy) {

  var i = Math.floor(Math.random()*hosts.length),
      host = hosts[i];

  console.log('Proxy to: ' + host);

  req.headers.Host = host;

  proxy.proxyRequest(req, res, {
    host: host,
    port: 80
  });

});


var port = process.env.PORT || 4000;
server.listen(port);
console.log("Listening on " + port);