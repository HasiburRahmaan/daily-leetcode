var minSteps = function (s, t) {
  let sMap = new Map(),
    tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }

  let count = 0;
  for (let [key, value] of tMap.entries()) {
    let sValue = sMap.get(key) || 0;

    if (sValue < value) {
      count += value - sValue;
    } else if (!sValue) {
      count += value;
    }
  }

  return count;
};

let s = "teetcode";
let t = "pratcice";

console.log(minSteps(s, t));

s = "aba";
t = "bab";
console.log(minSteps(s, t));
