const md5Crypto = require('./md5');
const getmapListStr = require('./getmapListStr');
const app_key = 'cgsoft';
const app_secret = '6d3121b650e42855976d0f70dd2048e4';

function getSign(mapList, apiString, timestamp) {
  let toBeEncodedStr;
  toBeEncodedStr =`${app_secret}${apiString}${getmapListStr(mapList)}${timestamp} ${app_secret}`;
  return md5Crypto(toBeEncodedStr);
}

export default getSign;