var fs = require('fs');
fs.readFile('logo.png', (err, data) => {
    // if (err) {
    //     console.log(err)
    // } else {
    //     console.log(Buffer.isBuffer(data))
    // }
    //创造有个图片， 有这个名字覆盖无则创建
    fs.writeFile('logo_buffer.png', data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log()
    })
    // var base64Image = new Buffer(data).toString('base64');
    var base64Image = data.toString('base64');
    // console.log(base64Image)
    var decodeImage = new Buffer(base64Image, 'base64')
    console.log(Buffer.compare(data, decodeImage)) //值一样0
    fs.writeFile('logo_decoded.png', decodeImage, function (err) {
        if (err) console.log(err)
    })
})
