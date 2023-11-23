var rotate = function (nums, k) {
  k = k % nums.length;
  let lastNumbers = nums.splice(nums.length - k);
  nums.unshift(...lastNumbers);

  // return nums.slice(-k).concat(nums.slice(0, nums.length - k));
};

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotate(nums, k));

nums = [-1, -100, 3, 99];
k = 2;
console.log(rotate(nums, k));
