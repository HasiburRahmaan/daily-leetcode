var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;

  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);

  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

  return root;
};

let nums;

nums = [3, 2, 1, 6, 0, 5];
console.log(constructMaximumBinaryTree(nums)); // [6,3,5,null,2,0,null,null,1]

nums = [3, 2, 1];
console.log(constructMaximumBinaryTree(nums)); // [3,null,2,null,1]

nums = [3, 2, 1, 6, 0, 5, 7];
console.log(constructMaximumBinaryTree(nums)); // [7,6,5,3,2,0,1]
