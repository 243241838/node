var EventEmitter = require('events').EventEmitter;
// console.log(EventEmitter)
var life = new EventEmitter;
life.setMaxListeners(12) 
//addEventEmitter
//emit 发射发出的意思
life.on('add', function (who) {
    console.log('g' + who + '倒水1')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水2')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水3')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水4')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水5')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水6')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水7')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水8')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水9')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水10')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水11')
})
life.on('add', function (who) {
    console.log('g' + who + '倒水12')
})
// 实验
life.emit('add', '我')
