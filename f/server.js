var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world\n')
}).listen(3000, '10.1.16.135')
console.log('HELLO')