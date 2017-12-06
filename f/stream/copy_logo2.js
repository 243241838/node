var fs = require('fs');
var read = fs.createReadStream('1.mp4');
var write = fs.createWriteStream('1-stream.mp4');
read.on('data', (chunk) => {
    if (write.write(chunk) === false) {
        console.log('还在缓存区');
        read.pause(); //暂停读写
    }
    // write.write(chunk);
})
read.on('end', () => {
    write.end(); //
})
write.on('drain', () => {
    console.log('写入')
    read.resume();
})