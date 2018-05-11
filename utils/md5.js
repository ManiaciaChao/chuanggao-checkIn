const md5 = require('js-md5');

function md5Crypto(input) {
  return md5(input);
}

module.exports = md5Crypto;
