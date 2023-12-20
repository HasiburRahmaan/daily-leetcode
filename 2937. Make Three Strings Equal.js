var findMinimumOperations = function (s1, s2, s3) {
  const minLength = Math.min(s1.length, s2.length, s3.length);
  let equal = 0;
  for (let i = 0; i < minLength; i++) {
    if (s1[i] === s2[i] && s2[i] === s3[i]) {
      ++equal;
      continue;
    }
    break;
  }
  if (equal === 0) return (equal = -1);
  return s1.length + s2.length + s3.length - 3 * equal;
};

/*

var findMinimumOperations = function (s1, s2, s3) {
    if (s1[0] !== s2[0] || s1[0] !== s3[0] || s3[0] !== s2[0]) {
        return -1
    }
    let minLen = Math.min(s1.length, s2.length, s3.length)
    let sum = s1.length + s2.length + s3.length - 3;
    for (let i = 1; i < minLen; i++) {
        if (s1[i] === s2[i] && s2[i] === s3[i]) {
            sum -= 3; // Decrement the sum by 3 for each matching character in the strings
        } else {
            break; // Break the loop when a mismatch is encountered
        }
    }

    return sum;
};
*/
