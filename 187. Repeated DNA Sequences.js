var findRepeatedDnaSequences = function (s) {
  let map = {};
  let result = new Set();
  for (let i = 0; i < s.length - 9; i++) {
    let str = s.substring(i, i + 10);
    if (map[str]) {
      result.add(str);
    } else {
      map[str] = 1;
    }
  }
  return [...result];
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
