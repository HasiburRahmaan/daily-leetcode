var numIdenticalPairs = function (nums) {
  let numIndex = {};
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (numIndex.hasOwnProperty(nums[i])) {
      result += numIndex[nums[i]];
      numIndex[nums[i]]++;
    } else {
      numIndex[nums[i]] = 1;
    }
  }
  return result;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
