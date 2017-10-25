// var part = {
//     word: 'aa',
//     aa: function() {
//         console.log(this === part)
//     }
// }
// part.aa();
// function pet(words) {
//    this.words = words;
//    console.log(this.words);
//    console.log(this === global)
// }
// pet('aa')

function per(words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words)
    }
}
var car = new per('a');
car.speak()