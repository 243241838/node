var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('aa', (a, b) => {
    console.log(a, b)
})

emitter.emit('error')
