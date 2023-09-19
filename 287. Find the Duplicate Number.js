/* Most Optimized Approach so far by me */
var findDuplicate = function (nums) {
  let numberSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    let prevSize = numberSet.size;
    numberSet.add(nums[i]);
    let afterSize = numberSet.size;
    if (prevSize == afterSize) {
      return nums[i];
    }
  }
  return nums[0];
};

/* Second Approach */
/* -------------------------------------  
var findDuplicate = function (nums) {
    let numberSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if(numberSet.has(nums[i])){
            return nums[i]
        }
        numberSet.add(nums[i])
    }
    return nums[0]
};
-----------------------------------------*/

/* First Approach */
/* -------------------------------------  

var findDuplicate = function (nums) {
    let repeated;
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i]===nums[j]){
                repeated = nums[i]
                break;
            }
        }
        if(repeated){
            break
        }
    }
    return repeated
};

-----------------------------------------*/
