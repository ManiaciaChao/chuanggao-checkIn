const fs = require('fs');
const path = require('path');

const CONFIG_DATA = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../config/config.json')));

function getCoordinateData (startTime, endTime) {
    let {X, Y} = CONFIG_DATA.FIX_POINT;
    let coordinateData = [];
    for (let currentTime = startTime; currentTime < endTime; currentTime += 3) {
      X = coordinateMoving(X);
      Y = coordinateMoving(Y);
      let point ={
        a: String(X),
        o: String(Y),
        v: '-1',
        s: currentTime,
      };
      coordinateData.push(point);
    }
    return coordinateData;
}

function coordinateMoving (position) {
  let movingTarget = Math.random() * 0.01 + parseFloat(position);
  return movingTarget;
}

module.exports = getCoordinateData;