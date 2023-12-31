var maxLengthBetweenEqualCharacters = function (s) {
  console.time("start");
  let count = -1;
  for (let i = 0; i < s.length; i++) {
    count = Math.max(count, i - s.indexOf(s[i]) - 1);
  }
  console.timeEnd("start");

  console.time("startTwo");
  let charSet = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!charSet.has(s[i])) {
      count = Math.max(count, s.lastIndexOf(s[i]) - i - 1);
    }
    charSet.add(s[i]);
  }
  console.timeEnd("startTwo");

  return count;
};

let s = "aa";
// console.log(maxLengthBetweenEqualCharacters(s)); // 0

s = "abca";
// console.log(maxLengthBetweenEqualCharacters(s)); // 2

s = "cbzxy";
// console.log(maxLengthBetweenEqualCharacters(s)); // -1

s = "cabbac";
// console.log(maxLengthBetweenEqualCharacters(s)); // 4

s = "mgntdygtxrvxjnwksqhxuxtrv";
console.log(maxLengthBetweenEqualCharacters(s)); // 18

/*

var maxLengthBetweenEqualCharacters = function (s) {
  let count = -1;

  let charMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (charMap.get(s[i]) != undefined) {
      appearTwice = true;
      count = Math.max(count, i - charMap.get(s[i]) - 1);
    } else {
      charMap.set(s[i], i);
    }
  }

  return count;
};
*/

/*------------------------------------------------------------- */
/*------------------------------------------------------------- */
/*------------------------------------------------------------- */

/*
var maxLengthBetweenEqualCharacters = function (s) {
  let count = -1;
  let charSet = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!charSet.has(s[i])) {
      count = Math.max(count, s.lastIndexOf(s[i]) - i - 1);
    }
    charSet.add(s[i]);
  }
  return count;
};
*/
