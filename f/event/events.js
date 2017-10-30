var EventEmitter = require('events').EventEmitter;
// console.log(EventEmitter)
var life = new EventEmitter;
life.setMaxListeners(12) 
//addEventEmitter
//emit 发射发出的意思
//配合下边删除
function water(who) {
     console.log('g' + who + '倒水11111')
}
life.on('add', water)
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
// life.on('add', function (who) {
//     console.log('g' + who + '倒水10')
// })
// life.on('add', function (who) {
//     console.log('g' + who + '倒水11')
// })
// life.on('add', function (who) {
//     console.log('g' + who + '倒水12')
// })
life.on('add1', function (who) {
    console.log('g' + who + '倒水12')
})
life.removeListener('add', water) //要是有名字的函数，匿名函数没有用
// life.removeAllListeners() //取消life全部监听事件
// 判断是否有这个监听事件
var has = life.emit('add', '我')
// var has1 = life.emit('add1', '我')
let a = 0;
console.log(life.listeners('add').length)
// console.log(EventEmitter.listenerCount(life, 'add'))
// var has2 = life.emit('add2', '我')
// console.log(has) //有true 无false
// console.log(has1)
// console.log(has2)