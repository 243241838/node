var name;
function setName (thyName) {
    name = thyName
};
function sayHello () {
    console.log('Hello' + name);
}
exports.setName = setName;
exports.sayHello = sayHello;