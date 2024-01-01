var rob = function (nums) {
  //   let dp = Array(nums.length + 1).fill(0);
  //   dp[1] = nums[0];
  let current = nums[0];
  let prev = 0;
  let max;
  for (let i = 2; i <= nums.length; i++) {
    max = Math.max(current, prev + nums[i - 1]);
    prev = current;
    current = max;
  }
  //   return dp[nums.length];
  return max;
};

let nums = [1, 2, 3, 1];
/*
[0, 1, 0, 0, 0]; // initial
[0, 1, 3, 0, 0]; // i = 2
[0, 1, 3, 4, 0]; // i = 3
[0, 1, 3, 4, 4]; // i = 4
*/
console.log(rob(nums)); // 4

nums = [2, 7, 9, 3, 1];
console.log(rob(nums)); // 12

nums = [2, 1, 1, 2];
// /*
[0, 2, 0, 0, 0, 0]; //initial
[0, 2, 2, 0, 0, 0]; // i = 2
[0, 2, 2, 3, 0, 0]; // i = 3
[0, 2, 2, 3, 4, 0]; // i = 4
[0, 2, 2, 3, 4, 5]; // i = 5

// */
console.log(rob(nums)); // 4

nums = [2, 1, 1, 2, 1];
console.log(rob(nums)); // 4
