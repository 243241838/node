var url = require('url');
var b = url.parse('http://imooc.com:8080/course/list?from=scott&course=node#flool');
// console.log(b)
var a = url.format(b);
// console.log(a)
var c = url.resolve('http://imooc.com/', '/course/list');
// console.log(c)
// console.log(url.parse('http://imooc.com:8080/course/list?from=scott&course=node#floo', true))
console.log(url.parse('//imooc.com/course/list', true, true))