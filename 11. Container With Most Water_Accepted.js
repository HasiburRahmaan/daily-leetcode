/* --------- Two Pointer Approach------------- */
// Time Complexity: O(n)
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  right = height.length - 1;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

/* ------------- Brute Force Approach ------------------ */
// Time Complexity: O(n^2)
var maxArea = function (height) {
  let area = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let currentArea = Math.min(height[i], height[j]) * (j - i);
      area = Math.max(area, currentArea);
    }
  }
  return area;
};
