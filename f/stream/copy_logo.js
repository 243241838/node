var fs = require('fs');
var souse = fs.readFileSync('../buffer/logo.png');
console.log(souse)
fs.writeFileSync('aa.png', souse)