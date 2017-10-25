//阻塞代码实例 在文件读取完后才执行完程序。
// var fs = require('fs');
// var data = fs.readFileSync('input.text');
// console.log(data.toString());
// console.log('程序结束');

//非阻塞代码实例 不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。
// var fs = require('fs');
// fs.readFile('input.text', function (err, data) {
//     if (err) {
//       console.error(err.stack);
//       return false;
//     }
//     console.log(data.toString());
// })
// console.log('程序结束');

//events模块
// var events = require('events'); // 引入 events 模块
// var eventEmitter = new events.EventEmitter(); // 创建 eventEmitter 对象
// var connectHandler = function connected() { // 创建事件处理程序
//    console.log('连接成功。'); 
//    eventEmitter.emit('data_received');  // 触发 data_received 事件 
// }
// eventEmitter.on('connection', connectHandler); // 绑定 connection 事件处理程序
// eventEmitter.on('data_received', function(){ // 使用匿名函数绑定 data_received 事件
//    console.log('数据接收成功。');
// }); 
// eventEmitter.emit('connection'); // 触发 connection 事件
// console.log("程序执行完毕。");
