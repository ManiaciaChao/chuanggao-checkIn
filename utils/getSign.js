const md5Crypto = require('./md5');
const getmapListStr = require('./getmapListStr');

const app_secret = '6d3121b650e42855976d0f70dd2048e4';

function getSign(mapList, apiString, timestamp) {
  let toBeEncodedStr;
  let mapListStr = getmapListStr(mapList);
  toBeEncodedStr =`${app_secret}${apiString}${mapListStr}${timestamp} ${app_secret}`;
  return md5Crypto(toBeEncodedStr);
}

module.exports = getSign;
