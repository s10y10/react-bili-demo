const path = require('path');
const fs = require('fs');
const request = require('request');
const { saveImage } = require('./save-image');
const { toBase64 } = require('./to-base64');
const suffixReg = /\.(png|webp|jpg)$/i;

const getResource = () => {
  return new Promise((resolve) => {
    request.get(
      `https://www.fastmock.site/mock/2de746f0f0268f3369d680c0ab1ec35c/bili-demo/getResource`,
      (err, data) => {
        const resData = JSON.parse(data.body);
        resolve(resData);
      }
    );
  });
};

(async () => {
  const map = await getResource();
  for (let key in map) {
    const value = map[key];
    for (let i = 0; i < value.length; i++) {
      const idxValue = i + 1;
      const remoteUrl = value[i];
      const suffix = remoteUrl.match(suffixReg)[1];
      const toPath = path.resolve(
        __dirname,
        'output',
        `icon${idxValue}.${suffix}`
      );
      await saveImage(remoteUrl, toPath);
      const base64 = await toBase64(toPath, suffix);
      const fileName = `${key.replace(/s$/, '')}${idxValue}`;
      const generaterPath = path.resolve(
        __dirname,
        `../src/config/${key}/${fileName}.ts`
      );
      const generaterContent = `export const ${fileName} = \`${base64}\``;
      fs.writeFileSync(generaterPath, generaterContent, 'utf-8');
    }
  }
})();
