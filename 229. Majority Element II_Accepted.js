/* Index Approach */
var majorityElement = function (nums) {
  let numAppearances = {};
  let majority = nums.length / 3;

  let arr = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!numAppearances[nums[i]]) {
      numAppearances[nums[i]] = 1;
    } else {
      numAppearances[nums[i]]++;
    }

    if (numAppearances[nums[i]] > majority) {
      arr.add(nums[i]);
    }
  }

  return [...arr];
};
