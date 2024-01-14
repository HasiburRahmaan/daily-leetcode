var closeStrings = function (word1, word2) {
  let n = word1.length;
  let m = word2.length;
  if (n != m) return false;

  let wordOneMap = new Array(26).fill(0);
  let wordTwoMap = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    wordOneMap[word1[i].charCodeAt() - 97]++;
    wordTwoMap[word2[i].charCodeAt() - 97]++;
  }
  for (let i = 0; i < 26; i++) {
    if (
      (wordOneMap[i] == 0 && wordTwoMap[i] > 0) ||
      (wordOneMap[i] > 0 && wordTwoMap[i] == 0)
    )
      return false;
  }

  //   return wordOneMap.sort((a, b) => a - b).join("") == wordTwoMap.sort((a, b) => a - b).join("");

  wordOneMap.sort((a, b) => a - b);
  wordTwoMap.sort((a, b) => a - b);
  for (let i = 0; i < 26; i++) {
    if (wordOneMap[i] != wordTwoMap[i]) return false;
  }

  return true;
};

let word1, word2;

(word1 = "abc"), (word2 = "bca");
console.log(closeStrings(word1, word2)); // true

(word1 = "a"), (word2 = "aa");
console.log(closeStrings(word1, word2)); // false

(word1 = "cabbba"), (word2 = "abbccc");
console.log(closeStrings(word1, word2)); // true

(word1 = "cabbba"), (word2 = "aabbss");
console.log(closeStrings(word1, word2)); // false

(word1 = "uau"), (word2 = "ssx");
console.log(closeStrings(word1, word2)); // false
