var leftRightDifference = function (nums) {
  if (nums.length == 1) return [0];

  let answer = [];
  let n = nums.length;

  let prevLeftSum = 0;
  let prevRightSum = nums.reduce((res, curr) => res + curr, 0);

  for (let i = 1; i <= n; i++) {
    prevRightSum -= nums[i - 1];
    answer.push(Math.abs(prevLeftSum - prevRightSum));
    prevLeftSum += nums[i - 1];
  }

  return answer;
};

let nums = [10, 4, 8, 3];

console.log(leftRightDifference(nums)); //[15,1,11,22]
