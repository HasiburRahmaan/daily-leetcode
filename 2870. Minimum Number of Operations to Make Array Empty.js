var minOperations = function (nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let count = 0;
  for (let [key, value] of map.entries()) {
    if (value == 1) return -1;

    count += Math.ceil(value / 3);
  }

  return count;
};

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(minOperations(nums));

nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(minOperations(nums));

nums = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(minOperations(nums));
