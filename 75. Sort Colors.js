var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
  }

  console.log(nums);
};

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);

/*


*/
