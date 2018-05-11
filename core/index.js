const getSign = require('../utils/getSign');
const getJsonSports = require('../utils/getJsonSports');
const createRequest = require('./createRequest');

const app_key = 'cgsoft';
const baseUrl = 'http://petzjk.hust.edu.cn/cgapp-server/';
const apiString = '/api/v3/savesports';
const timestamp = String(+new Date());
const jsonsports = JSON.stringify(getJsonSports()).split('"').join('');
const sign = getSign({jsonsports}, apiString, timestamp);
const data = {
  app_key, 
  jsonsports, 
  sign, 
  timestamp
};

createRequest(`${baseUrl}${apiString}`, 'POST', data, (error, response) => {
  if(error) {
    throw error;
  }
  if(!error && response.statusCode === 200) {
    console.log(response.body);
  }
});
