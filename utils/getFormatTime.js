function getFortmatTime (timestamp) {
  let currentTime = new Date(timestamp);
  let year = doubleNumber(currentTime.getFullYear());
  let month = doubleNumber(currentTime.getMonth());
  let day = doubleNumber(currentTime.getDay());
  let hour = doubleNumber(currentTime.getHours());
  let minute = doubleNumber(currentTime.getMinutes());
  let seconds = doubleNumber(currentTime.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
}

function doubleNumber (number) {
  return String(number).length < 2 ? `0${number}` : number;
}

module.exports = getFortmatTime;