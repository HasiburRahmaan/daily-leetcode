var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
    }
    j++;
  }
  return i;
};

let g = [1, 2, 3];
let s = [1, 1];
console.log(findContentChildren(g, s));

(g = [1, 2]), (s = [1, 2, 3]);
console.log(findContentChildren(g, s));

(g = [10, 9, 8, 7]), (s = [5, 6, 7, 8]);
console.log(findContentChildren(g, s));
