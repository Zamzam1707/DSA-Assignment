class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function printRootToLeafPaths(root) {
    if (root === null) {
      return;
    }
  
    // Create an empty stack to keep track of nodes during traversal
    const stack = [];
    // Create an empty stack to store the current path
    const pathStack = [];
  
    // Push the root node to the stack
    stack.push(root);
    // Push the value of the root node to the path stack
    pathStack.push(root.value);
  
    while (stack.length > 0) {
      // Pop a node from the stack
      const currentNode = stack.pop();
      // Pop the corresponding value from the path stack
      const currentPath = pathStack.pop();
  
      // Check if the current node is a leaf node
      if (currentNode.left === null && currentNode.right === null) {
        // Print the current path
        console.log(currentPath);
      }
  
      // Push the right child to the stack and update the path stack
      if (currentNode.right !== null) {
        stack.push(currentNode.right);
        pathStack.push(currentPath + "->" + currentNode.right.value);
      }
  
      // Push the left child to the stack and update the path stack
      if (currentNode.left !== null) {
        stack.push(currentNode.left);
        pathStack.push(currentPath + "->" + currentNode.left.value);
      }
    }
  }
  
  // Example usage
  const root = new TreeNode(6);
  root.left = new TreeNode(3);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(4);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);
  
  printRootToLeafPaths(root);
  