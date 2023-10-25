const bwipjs = require('bwip-js');
const fs = require('fs')

const generateBarCode = data => {


    bwipjs.toBuffer({
        bcid:        'code128',       // Barcode type
        text:        data,    // Text to encode
        scale:       3,               // 3x scaling factor
        height:      10,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textalign:  'center',        // Always good to set this
    }, function (err, png) {
        if (err) {
            // `err` may be a string or Error object
        } else {
            // `png` is a Buffer
            // png.length           : PNG file length
            // png.readUInt32BE(16) : PNG image width
            // png.readUInt32BE(20) : PNG image height
            fs.writeFileSync(`barcode_images/${data}.png`, png);
        }
    });
}

module.exports = {
  generateBarCode,
}
