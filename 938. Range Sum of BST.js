var rangeSumBST = function (root, low, high) {
  let count = 0;

  function traverse(node, low, high) {
    if (!node?.val) return;

    if (node.val >= low && node.val <= high) {
      count += node.val;
    }
    traverse(node.left, low, high);
    traverse(node.right, low, high);
  }

  traverse(root, low, high);
  return count;
};
