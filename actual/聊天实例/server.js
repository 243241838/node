var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {}; // 缓存文件内容的对象

//请求的文件不存在时发送404错误
function send404 (response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not foound.');
    response.end();
}

//文件数据服务
function sendFile (response, filePath, fileContents) {
    response.writeHead(
        200, 
        {'Content-Type': mime.lookup(path.basename(filePath))}
    );
    response.end(fileContents);
}

//提供静态文件服务
function serveStatic (response, cache, absPath) {
    if (cache[absPath]) { //检查文件是否缓存在内存中
        sendFile(response, absPath, cache[absPath]); //从内存中返回文件
    } else {
        fs.exists(absPath, function (exists) { //检查文件是否存在
            if (exists) {
                fs.readFile(absPath, function (err, data) { //从硬盘中读取文件
                    if (err) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data); //从硬盘中读取文件并返回
                    }
                })
            } else {
                send404(response); //发送HTTP 404响应
            }
        })
    }
}

///创建服务器
var server = http.createServer(function (request, response) { //创建HTTp服务器，用匿名函数定义对每个请求的处理行为
    var filePath = false;
    if (request.url == '/') {
        filePath = 'public/index.html'; // 确定返回的默认HTml文件
    } else {
        filePath = 'public' + request.url; //将url路径转为文件的相对路径
    }
    var absPath = './' + filePath;
    serveStatic(response, cache, absPath); // 返回静态文件
})
//启动服务器
server.listen(8086, '10.1.16.135', function () {
    console.log('启动服务，端口：8086');
})