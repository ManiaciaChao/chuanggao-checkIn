const md5 = require('crypto').createHash('md5');

function md5Crypto(input) {
  md5.update(input);
  return md5.digest('hex');
}

module.exports = md5Crypto;