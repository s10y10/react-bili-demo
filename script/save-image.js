const http = require('http');
const fs = require('fs');

const saveImage = (url, path) => {
  return new Promise((resolve) => {
    http.get(url, (req, res) => {
      var imgData = '';
      req.on('data', function (chunk) {
        imgData += chunk;
      });
      req.setEncoding('binary');
      req.on('end', function () {
        fs.writeFile(path, imgData, 'binary', function (err) {
          if (!err) {
            resolve();
          }
        });
      });
    });
  });
};

module.exports = {
  saveImage,
};
