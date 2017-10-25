var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter;
event.on('some', function () {
    console.log('aa');
})
event.emit('some')