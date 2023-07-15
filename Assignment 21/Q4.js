class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  }
  
  // Function to connect nodes at the same level
  function connectNodes(root) {
    if (root === null) {
      return;
    }
  
    // Create a queue for level-order traversal
    const queue = [root];
  
    while (queue.length > 0) {
      const size = queue.length;
  
      // Connect nodes at the same level
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
  
        if (i < size - 1) {
          node.next = queue[0];
        }
  
        if (node.left !== null) {
          queue.push(node.left);
        }
  
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
  }
  
  // Function to traverse connected nodes and print their values
  function traverseConnectedNodes(root) {
    const values = [];
  
    let current = root;
    while (current !== null) {
      let temp = current;
      while (temp !== null) {
        values.push(temp.value);
        temp = temp.next;
      }
      values.push(-1); // Mark the end of the level
      current = current.left;
    }
  
    return values;
  }
  
  // Example usage
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  connectNodes(root);
  const values = traverseConnectedNodes(root);
  
  console.log("Connected Nodes:");
  console.log(values.join(" → "));
  