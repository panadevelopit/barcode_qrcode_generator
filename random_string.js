function makeid(length) {
    let result = '';
    // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

// console.log(makeid(8));

const SIZE = 4000
const list = []
while (list.length < SIZE) {
    const newId = 'B' + makeid(8)
    if (!list.includes(newId)) {
        list.push(newId)
    }
}
// console.log('DONE - ', list.length)
for (const code of list) {
    // console.log(`${code}`)
}

const fs = require('fs')
fs.writeFileSync('list.txt', list.join('\r\n'))

const {generateQrCode} = require('./qrcode_generator')
for (const code of list) {
    generateQrCode(code)
}

const {generateBarCode} = require('./barcode_generator')
for (const code of list) {
    generateBarCode(code)
}
