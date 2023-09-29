var isMonotonic = function (nums) {
  let status = null;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      let diff = nums[i] > nums[i + 1];
      if (status == null) {
        status = diff;
        continue;
      }
      if (diff != status) return false;
    }
  }
  return true;
};
