// var buf = new Buffer(26);
// var len = buf.write('www');
// console.log('写入字节数' + len);
// for(var i = 0; i < 26; i++) {
//    buf[i] = i + 97;
// }
// console.log(buf.toString('ascii'))
var buf = new Buffer('www.baidu.com');
var json = buf.toJSON(buf); //buffer转换为json对像
console.log(json)
