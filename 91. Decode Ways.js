var numDecodings = function (s) {
  const dp = new Array(s.length + 1).fill(0);
  dp[s.length] = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == 0) continue;
    dp[i] = dp[i + 1];
    if (s[i] + s[i + 1] <= 26) dp[i] += dp[i + 2];
  }

  return dp[0];
};

let s;

s = "06";
console.log(numDecodings(s));
s = "226";
console.log(numDecodings(s));
s = "12";
console.log(numDecodings(s));
