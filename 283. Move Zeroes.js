let moveZeroes = function (nums) {
  let low = 0;
  let high = low + 1;

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
      high++;
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
      high++;
    }
  }
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);

// var moveZeroes = function (nums) {
//     let w = 0;
//     let n = nums.length
//     for(let r = 0; r<n; r++){
//         let val = nums[r]
//         nums[r] = 0
//         if(nums[r]!=0){
//             nums[w++] = val
//         }
//     }
// };
