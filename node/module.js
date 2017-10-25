var name;
//第一种方法
module.exports = {
    setName: function(thyName) {
       name = thyName;
    },
    sayHello: function() {
        console.log('hello' + name);
    }
}
// 第二种
// exports.setName = function(thyName) {
//     name = thyName;
// }
// exports.sayHello = function() {
//     console.log('hello' + name);
// }