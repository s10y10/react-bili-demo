const fs = require('fs');

const toBase64 = (path, suffix) => {
  return new Promise((resolve) => {
    fs.readFile(path, 'binary', function (err, data) {
      if (!err) {
        const buffer = Buffer.from(data, 'binary');
        const base64Str = buffer.toString('base64');
        resolve(`data:image/${suffix};base64,${base64Str}`);
      }
    });
  });
};

module.exports = {
  toBase64,
};
