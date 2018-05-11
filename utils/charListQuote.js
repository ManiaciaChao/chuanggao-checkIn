function charListQuote (str) {
  let charList = ['{', '}', '"', '|'];
  let replacedStr = '';
  for (let char of charList) {
    replacedStr = encodeURIComponent(str);
  }
  return replacedStr;
}

console.log(charListQuote('{{[[123]]sdas}}'));
module.exports = charListQuote;