var nextGreaterElements = function (nums) {
  const stack = [];
  const res = new Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length * 2; i++) {
    const num = nums[i % nums.length];
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      res[stack.pop()] = num;
    }
    if (i < nums.length) {
      stack.push(i);
    }
  }
  return res;
};

let nums = [1, 2, 1];
console.log(nextGreaterElements(nums)); // [2,-1,2]

nums = [1, 2, 3, 4, 3];
console.log(nextGreaterElements(nums)); // [2,3,4,-1,4]

nums = [1, 2, 3, 4, 5];
console.log(nextGreaterElements(nums)); // [2,3,4,5,-1]
