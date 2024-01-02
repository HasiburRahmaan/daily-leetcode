var findMatrix = function (nums) {
  let map = new Map();
  let res = [];
  for (let num of nums) {
    let value = (map.get(num) || 0) + 1;
    map.set(num, value);

    let index = value - 1;
    res[index] = res[index] || [];
    res[index].push(num);
  }

  return res;
};

let nums = [1, 3, 4, 1, 2, 3, 1];
console.log(findMatrix(nums));

nums = [1, 2, 3, 4, 5, 7, 7, 8, 9, 1, 1, 2, 3, 4, 4, 11, 12];
console.log(findMatrix(nums));

/*

var findMatrix = function (nums) {
  let map = {};
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }

    let index = map[nums[i]] - 1;
    if (!res[index]) {
      res[index] = [nums[i]];
    } else {
      res[index].push(nums[i]);
    }
  }

  return res;
};

*/
