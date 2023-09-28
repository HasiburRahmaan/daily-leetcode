var isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] == t[j]) {
      i++;
    }
  }

  return i == s.length;
};

/* ------------------------------- 1st attempt (Accepted) ------------------------------ */
/*
var isSubsequence = function (s, t) {
  let lastPosition = -1;
  for (let i = 0; i < s.length; i++) {
    let notFound = true;
    for (let j = i; j < t.length; j++) {
      if (s[i] == t[j] && j > lastPosition) {
        notFound = false;
        lastPosition = j;
        break;
      }
    }
    if (notFound) {
      return false;
    }
  }
  return true;
};
*/
/* -------------------------------------------------------------------------- */
