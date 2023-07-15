class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to flip the binary tree
  function flipBinaryTree(root) {
    if (root === null || (root.left === null && root.right === null)) {
      return root;
    }
  
    // Flip the left and right subtrees recursively
    const flippedLeft = flipBinaryTree(root.left);
    const flippedRight = flipBinaryTree(root.right);
  
    // Swap the left and right child of the current node
    root.left = flippedRight;
    root.right = flippedLeft;
  
    return root;
  }
  
  // Function to print the flipped binary tree in pre-order traversal
  function printBinaryTree(root) {
    if (root === null) {
      return;
    }
  
    console.log(root.value);
    printBinaryTree(root.left);
    printBinaryTree(root.right);
  }
  
  // Example usage
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log("Original Binary Tree:");
  printBinaryTree(root);
  
  const flippedRoot = flipBinaryTree(root);
  
  console.log("Flipped Binary Tree:");
  printBinaryTree(flippedRoot);
  