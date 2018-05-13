function checkIn (participants) {
  const getSign = require('../utils/getSign');
  const getJsonSports = require('../utils/getJsonSports');
  const createRequest = require('./createRequest');

  const app_key = 'cgsoft';
  const baseUrl = 'http://petzjk.hust.edu.cn/cgapp-server/';
  const apiString = '/api/v3/savesports';
  const timestamp = String(+new Date());

  for(let name in participants) {
    const jsonsports = JSON.stringify(getJsonSports(name, participants[name])).split('"').join('');
    const sign = getSign({jsonsports}, apiString, timestamp);
    const data = {
      app_key, 
      jsonsports, 
      sign, 
      timestamp
    };

    createRequest(`${baseUrl}${apiString}`, 'POST', data, (error, response) => {
      if(error) {
        console.log(`${name} checked in failed...`);
        throw error;
      }
      if(!error && response.statusCode === 200) {
        console.log(response.body, `${name} checked in success!`);
      }
    });
  }
}

module.exports = checkIn;