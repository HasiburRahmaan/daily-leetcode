var minOperations = function (s) {
  let count1 = 0; // Count of changes needed to make the string start with '1'
  let count2 = 0; // Count of changes needed to make the string start with '0'

  for (let i = 0; i < s.length; i++) {
    // If the current character should be '1'
    if (i % 2 === 0) {
      count1 += s[i] === "0" ? 1 : 0;
    } else {
      // If the current character should be '0'
      count1 += s[i] === "1" ? 1 : 0;
    }

    // If the current character should be '0'
    if (i % 2 === 0) {
      count2 += s[i] === "1" ? 1 : 0;
    } else {
      // If the current character should be '1'
      count2 += s[i] === "0" ? 1 : 0;
    }
  }

  // Return the minimum of count1 and count2
  return Math.min(count1, count2);
};

let s;

s = "1111";
console.log(minOperations(s));

s = "10";
console.log(minOperations(s));

s = "0100";
console.log(minOperations(s));
