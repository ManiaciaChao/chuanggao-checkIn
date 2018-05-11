function getmapListStr(mapList) {
  let mapListStr = '';
  for (let key in mapList) {
    mapList += key;
    mapList += mapList[key];
  }
  return mapListStr;
}

module.exports = getmapListStr;