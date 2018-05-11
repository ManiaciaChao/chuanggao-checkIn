const fs = require('fs');
const path = require('path');
const dateFormat = require('dateformat');
const getFormatTime = require('./getFormatTime');
const getEndTime = require('./getEndTime');
const CONFIG_DATA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../config/config.json')));
const JSON_SPORTS = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/jsonSports.json')));

function getJsonSports() {
  let endTimeStamp = +new Date();
  

  endTime = dateFormat(endTime, 'yyyy-mm-dd hh:MM:ss');
  let currentDate = dateFormat(sportId);
  JSON_SPORTS.xh = CONFIG_DATA.XH;
  JSON_SPORTS.sportId = sportId;
  JSON_SPORTS.currentDate = currentDate;
  JSON_SPORTS.beginTime = currentDate;
  JSON_SPORTS.endTime = endTime;
  JSON_SPORTS.name = CONFIG_DATA.NAME;
  return JSON_SPORTS;
}

module.exports = getJsonSports;