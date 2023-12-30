var makeEqual = function (words) {
  let counts = new Map();

  for (let word of words) {
    for (let char of word) {
      counts.set(char, (counts.get(char) || 0) + 1);
    }
  }

  let n = words.length;
  for (let charVal of counts.values()) {
    if (charVal % n != 0) return false;
  }

  return true;
};

let words = ["abc", "aabc", "bc"];
console.log(makeEqual(words));

words = ["ab", "a"];
console.log(makeEqual(words));

words = ["aabbcc", "aabbcc", "cb"];
console.log(makeEqual(words));

words = ["abcabc", "abcabc", "abcabc", "abc", "abc", "cba", "cba", "cba"];
console.log(makeEqual(words));
