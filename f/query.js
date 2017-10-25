const querystring = require('querystring');
var a = querystring.stringify({name: 'scott', course: ['jade', 'node'], form: ''});
// console.log(a); //name=scott&course=jade&course=node&form=
var b = querystring.stringify({name: 'scott', course: ['jade', 'node'], form: ''}, ';', ':'); //第一个为obj. 第二个分隔符默认&  第三个 键与值的连接 默认=
// console.log(b); //name:scott;course:jade;course:node;form:
// console.log(querystring.parse('name=scott&course=jade&course=node&form='))
// console.log(querystring.parse('name:scott;course:jade;course:node;form:', ';', ':'))
//第一个参数字符串， 
//第二个为分割符，告诉要用什么解析，第一个用的什么传什么 
//第三个键值连接符， 第一个用什么传什么 
//第二第三不穿或传不正确返回的是一个对象包含的字符串 
//第四个参数 指定要解析的键的最大数量。默认为 1000。指定为 0 则不限制。

//querystring.escape(str) //转译
var d = querystring.escape('哈哈');
console.log(d); // %E5%93%88%E5%93%88
console.log(querystring.unescape(d)); //哈哈
