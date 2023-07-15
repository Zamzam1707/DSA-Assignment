function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function findMaxSubtreeSum(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  function getSubtreeSum(node) {
    if (node === null) {
      return 0;
    }

    const leftSum = getSubtreeSum(node.left);
    const rightSum = getSubtreeSum(node.right);

    const subtreeSum = node.val + leftSum + rightSum;
    maxSum = Math.max(maxSum, subtreeSum);

    return subtreeSum;
  }

  getSubtreeSum(root);

  return maxSum;
}


const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);

console.log(findMaxSubtreeSum(root1)); // Output: 28

const root2 = new TreeNode(1);
root2.left = new TreeNode(-2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(-6);
root2.right.right = new TreeNode(2);

console.log(findMaxSubtreeSum(root2)); // Output: 7
