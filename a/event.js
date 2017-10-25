// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// event.on('aa', function () { //注册了一个叫aa的监听器
//     console.log('aa事件触发')
// })
// event.emit('aa'); //触发aa的监听器事件

// EventEmitter 类EventEmitter 类
/*
var events = require('events');
var eventEmitter = new events.EventEmitter();
var listener1 = function listener1 () {
    console.log('监听器 listenter1执行')
}
var listener2 = function listener2 () {
    console.log('监听器 listenter2执行')
}
eventEmitter.addListener('connection', listener1); // 绑定 connection 事件，处理函数为 listener1 
eventEmitter.on('connection', listener2); // 绑定 connection 事件，处理函数为 listener2
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "一个监听器连接事件"); //返回多少个事件
eventEmitter.emit('connection'); //触发事件
eventEmitter.removeListener('connection', listener1); // 移除listener1让listener1不监听
console.log(eventListeners + '还有多少事件')
eventEmitter.emit('connection'); //触发事件 listener1不执行了
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log('还有多少连接事件' + eventListeners);
console.log("程序执行完毕")
*/
var events = require('events');
var emitter = new events.EventEmitter();
// emitter.emit('error');
