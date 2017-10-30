var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '期待下一期',
    'cid': 11224
})
var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':' gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': 74,
        'Content-Type':' application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'td_cookie=3322053953; imooc_uuid=30b0adc5-9b8e-41a3-b683-e0c341cef31d; imooc_isnew_ct=1508489613; PHPSESSID=nrs63u16dp1kb6n518hq3nicg2; loginstate=1; apsid=YxOTIxNzNlMjY3NWZhY2VlMjYyNDA5ZTI5YWRlYWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjA3NTIzMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMDExMDAzODk1QHFxLmNvbQAAAAAAAAAAAAAAAAAAADY4NGUwNmFjZmUxYTUyYjlhYWQxZDUxNTMzYjJhMjZm8ez2WfHs9lk%3DNz; last_login_username=1011003895%40qq.com; td_cookie=3322022754; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1509094602,1509094865,1509329621,1509352241; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1509355127; imooc_isnew=2; cvde=59f6e335c0fa4-119',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/video/11224',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.79 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}
var req = http.request(options, function(res) {
    console.log('status:' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.headers));
    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end', function() {
        console.log('结束')
    })
})

req.on('error', function(e) {
    console.log('报错:' + e.message)
})
req.write(postData); //写入请求体
req.end();