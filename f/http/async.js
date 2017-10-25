// var  a = 0;
// while(a < 5) {
//     console.log(a)
//     a++;
// }
// switch (a) {
//     case 0:
//     a++;
//     console.log('0');
//     case 1:
//     a++;
//     console.log('1');
//     case 2:
//     a++;
//     console.log('2')
// }
var c = 0;
function print() {
    console.log(c)
}
function plus(callback) {
    setTimeout(() => {
        c += 1;
        callback();
    }, 1000)
}
plus(print);