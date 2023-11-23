var checkArithmeticSubarrays = function (nums, l, r) {
  for (let i = 0; i < l.length; i++) {
    let arr = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
    let res = true;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] - arr[j - 1] !== arr[1] - arr[0]) {
        res = false;
        break;
      }
    }

    l[i] = res;
  }
  return l;
};

/* Test Cases */
let nums = [4, 6, 5, 9, 3, 7],
  l = [0, 0, 2],
  r = [2, 3, 5];

console.log(checkArithmeticSubarrays(nums, l, r)); //[true,false,true]

(nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10]),
  (l = [0, 1, 6, 4, 8, 7]),
  (r = [4, 4, 9, 7, 9, 10]);
console.log(checkArithmeticSubarrays(nums, l, r)); //[false,true,false,false,true,true]
