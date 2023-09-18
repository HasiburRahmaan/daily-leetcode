var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let dictionary = [];

  for (let i = 0; i < s.length; i++) {
    let notMatched = true;
    let j = i;
    while (notMatched) {
      if (!dictionary.includes(s[j]) && s[j]) {
        dictionary.push(s[j]);
      } else {
        notMatched = false;
      }
      j++;
    }
    console.log(dictionary);
    if (result < dictionary.length) {
      result = dictionary.length;
    }
    dictionary = [];
  }

  return result;
};
