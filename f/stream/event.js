var fs = require('fs');
var read = fs.createReadStream('1.mp4')

console.log(read)
var a = 0;
read
    .on('data', (chunk) => {
        console.log(Buffer.isBuffer(chunk))
        // console.log(chunk.toString('utf-8'))
        read.pause(); //暂停流
        a++;
        setTimeout(() => {
            console.log('data')
            read.resume(); //开始流
        }, 10)
    })
    .on('readable', function() {
        console.log('data read')
    })
    .on('end', function() {
        console.log(a)
        console.log('data ends')
    })
    .on('close', function() {
        console.log('data close')
    })
    .on('error', function(e) {
        console.log('data error' + e)
    })
 