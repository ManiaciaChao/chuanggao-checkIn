function charListQuote (str) {
  let charList = ['{', '}', '"', '|'];
  let replacedStr = '';
  for (let char of charList) {
    replacedStr = encodeURIComponent(str);
  }
  return replacedStr;
}

module.exports = charListQuote;
