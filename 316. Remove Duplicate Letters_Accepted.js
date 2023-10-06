var removeDuplicateLetters = function (s) {
  let stack = [];
  let alreadySeen = new Set();
  let lastOccurence = {};

  for (let i = 0; i < s.length; i++) {
    lastOccurence[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    if (!alreadySeen.has(s[i])) {
      while (
        stack.length &&
        s[i] < stack[stack.length - 1] &&
        i < lastOccurence[stack[stack.length - 1]]
      ) {
        alreadySeen.delete(stack.pop());
      }
      stack.push(s[i]);
      alreadySeen.add(s[i]);
    }
  }
  return stack.join("");
};

console.log(removeDuplicateLetters("bcabc"));
console.log(removeDuplicateLetters("bcabcded"));
console.log(removeDuplicateLetters("cbacdcbc"));
