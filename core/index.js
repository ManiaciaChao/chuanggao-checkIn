const getSign = require('../utils/getSign');
const getJsonSports = require('../utils/getJsonSports');

const app_key = 'cgsoft';
const apiString = '/api/v3/savesports';
const timestamp = +new Date();
const jsonsports = JSON.stringify(getJsonSports());
const sign = getSign({jsonsports}, apiString, timestamp);

console.log({app_key, jsonsports, sign, timestamp});