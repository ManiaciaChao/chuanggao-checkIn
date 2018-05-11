function getmapListStr(mapList) {
  let mapListStr = '';
  for (let key in mapList) {
    mapListStr += key;
    mapListStr += String(mapList[key]);
  }
  return mapListStr;
}

module.exports = getmapListStr;