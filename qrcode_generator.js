var QRCode = require('qrcode')

const fnTest = () => {
    QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
    console.log(url)
    })

    QRCode.toFile('qrcodefile.png', 'Encode this text in QR code', {
        errorCorrectionLevel: 'H'
    }, function(err) {
        if (err) throw err;
        console.log('QR code saved!');
    });
}

const generateQrCode = data => {
    QRCode.toFile(`qrcode_images/${data}.png`, data, {
        errorCorrectionLevel: 'H'
      }, function(err) {
        if (err) throw err;
      });
}

module.exports = {
    generateQrCode,
}