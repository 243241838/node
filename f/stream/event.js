var fs = require('fs');
var read = fs.createReadStream('copy_logo.js')
read
    .on('data', (chunk) => {
        console.log(Buffer.isBuffer(chunk))
        console.log(chunk.toString('utf-8'))
    })
    .on('readable', function() {
        console.log('aa')
    })
    .on('end', function() {
        console.log('data ends')
    })
    .on('close', function() {
        console.log('data close')
    })
    .on('error', function(e) {
        console.log('data error' + e)
    })
 