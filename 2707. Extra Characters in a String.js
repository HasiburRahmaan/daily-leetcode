var minExtraChar = function (s, dictionary) {
  let str = "";
  dictionary.forEach((element) => {
    let duplicate = s;
    while (duplicate.includes(element)) {
      str += element;
      duplicate = duplicate.replace(element, "");
      console.log(element, str);
    }
  });
  console.log(s.length - str.length);

  return s.length;
};

let s = "dwmodizxvvbosxxw";
let dictionary = [
  "ox",
  "lb",
  "diz",
  "gu",
  "v",
  "ksv",
  "o",
  "nuq",
  "r",
  "txhe",
  "e",
  "wmo",
  "cehy",
  "tskz",
  "ds",
  "kzbu",
];
minExtraChar(s, dictionary);

/* Approaches */
var firstApproach = function (s, dictionary) {
  dictionary.forEach((element) => {
    if (s.includes(element)) {
      s = s.replace(element, "");
    }
  });

  return s.length;
};

/* Fun Functions */

function customIncludes(str, keyword) {
  let i = 0;
  let j = 0;
  while (i < str.length && j < keyword.length) {
    if (str[i] === keyword[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j === keyword.length;
}
