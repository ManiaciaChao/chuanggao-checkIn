const request = require('request');
const querystring = require('querystring');

function createRequest(url, method, data, callback) {
  const options = {
    url,
    method,
    headers: {
      'User-Agent': 'ChingoItemCGTY(Linux; iOS 11.2;iPhone HUUID/B6E3A84E-B928-4720-A6F9-A1390B3ED6BD)',
      'Accept': '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Connection': 'keep-alive',
      'Accept-Encoding': 'br, gzip, deflate',
    },
  };

  if (method.toUpperCase() === 'POST') {
    options.form = data;
  } else if (method.toUpperCase() === 'GET') {
    options.url += `?${querystring.stringify(data)}`;
  }

  request(options, callback);
}

module.exports = createRequest;
