var http = require('http');
http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Cotent-Type': 'text/plain'});
    // 发送响应数据 "Hello World"
    response.end();
}).listen(8888);
//终端打印如下信息
console.log('hhahhha ');