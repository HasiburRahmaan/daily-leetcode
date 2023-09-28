var decodeAtIndex = function (s, k) {
  let size = 0;
  let i = 0;
  while (size < k) {
    if (!isNaN(s[i])) {
      size *= s[i];
    } else {
      size++;
    }
    i++;
  }

  for (let j = i - 1; j >= 0; j--) {
    if (!isNaN(s[j])) {
      size /= s[j];
      k %= size;
    } else {
      if (k % size === 0) {
        return s[j];
      }
      size--;
    }
  }

  return "";
};

/* --------------First Approach () --------------- */
// var decodeAtIndex = function (s, k) {
//   let temp = "";
//   for (let i = 0; i < s.length; i++) {
//     if (!isNaN(s[i])) {
//       temp = temp.repeat(s[i]);
//     } else {
//       temp += s[i];
//     }
//     if (temp.length >= k) {
//       return temp[k - 1];
//     }
//   }
//   return temp[k - 1];
// };
