var http = require('http');
var fs = require('fs');
var request = require('request');
http.createServer((req, res) => {
    //   fs.readFile('aa.png', (err, data) => {
    //       if(err) {
    //           res.end('异常')
    //       } else {
    //           res.writeHead(200, {'Context-Type': 'text/html'});
    //           res.end(data)
    //       }
    //   })
    // fs.createReadStream('aa.png').pipe(res)
    request('http://static.mukewang.com/static/img/common/logo.png?t=2.4').pipe(res)
  }).listen(8090)