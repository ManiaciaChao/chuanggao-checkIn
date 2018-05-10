const fs = require('fs');
const path = require('path');

const getSign = require('../utils/getSign');
const getFormatTime = require('../utils/getFormatTime');

function checkIn() {
  let student = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/student.json')));
  let xh = student.xh;
  let sportsId = +new Date();
  let currentDate = getFormatTime(sportsId);
  [
    calorie, 
    odometer, 
    avgSpeed, 
    activeTime, 
    mood, 
    saySome, 
    beganPoint,
    endPoint,
    isValid,
    planRouteName,
    modementMode,
    routePolylineBh,
    endTime,
    beginTime,
    routeId,
    phoneVersion,
    alreadyPassPoint,
    name,
    stepCount,
    isValidReason,
    coordinate,
  ] = [
    '204.5', 
    '2.57', 
    '9.6', 
    '00:13:39', 
    '0', 
    '',
    '30.514444|114.434158',
    '30.514435|114.434166',
    '1',
    '跑步',
    '3',
    '',
    '',
    currentDate,
    '7',
    'iPhone8.2,11.2,B6E3A84E-B928-4720-A6F9-A1390B3ED6BD|3.4.2',
    '',
    student.name,
    '200',
    '',
    [],
  ];
  let obj = {
    xh, 
    sportsId, 
    currentDate, 
    calorie, 
    odometer, 
    avgSpeed, 
    activeTime,
    mood, 
    saySome, 
    beganPoint,
    endPoint,
    isValid,
    planRouteName,
    modementMode,
    routePolylineBh,
    endTime,
    beginTime,
    routeId,
    phoneVersion,
    alreadyPassPoint,
    name,
    stepCount,
    isValidReason,
    coordinate,
  };
  console.log(JSON.stringify(obj));
}

checkIn();
