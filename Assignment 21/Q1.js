class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to convert a binary tree into a binary search tree
function convertToBST(root) {
  // Step 1: Traverse the binary tree and store the values in an array
  const values = [];
  inorderTraversal(root, values);

  // Step 2: Sort the array
  values.sort((a, b) => a - b);

  // Step 3: Traverse the binary tree and replace node values with sorted values
  const index = { i: 0 }; // To keep track of the current index in the sorted array
  inorderReplace(root, values, index);
}

// Inorder traversal to store node values in an array
function inorderTraversal(node, values) {
  if (node === null) {
    return;
  }

  inorderTraversal(node.left, values);
  values.push(node.value);
  inorderTraversal(node.right, values);
}

// Inorder traversal to replace node values with sorted values
function inorderReplace(node, values, index) {
  if (node === null) {
    return;
  }

  inorderReplace(node.left, values, index);
  node.value = values[index.i++];
  inorderReplace(node.right, values, index);
}

// Example usage
const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(4);

console.log("Original binary tree:");
console.log(root);

convertToBST(root);

console.log("Converted binary search tree:");
console.log(root);
