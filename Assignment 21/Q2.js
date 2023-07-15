class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to find the distance between two nodes in a BST
  function findDistance(root, node1, node2) {
    // Find the LCA (Lowest Common Ancestor) of the two nodes
    let lca = findLCA(root, node1, node2);
  
    // Calculate the distance from the LCA to both nodes
    let distance1 = findNodeDistance(lca, node1);
    let distance2 = findNodeDistance(lca, node2);
  
    // Return the sum of the distances
    return distance1 + distance2;
  }
  
  // Function to find the LCA (Lowest Common Ancestor) of two nodes in a BST
  function findLCA(root, node1, node2) {
    if (root === null) {
      return null;
    }
  
    // If both nodes are smaller, move to the left subtree
    if (root.value > node1 && root.value > node2) {
      return findLCA(root.left, node1, node2);
    }
    // If both nodes are greater, move to the right subtree
    else if (root.value < node1 && root.value < node2) {
      return findLCA(root.right, node1, node2);
    }
    // Otherwise, the current node is the LCA
    else {
      return root.value;
    }
  }
  
  // Function to find the distance from a node to a target node in a BST
  function findNodeDistance(root, target) {
    if (root === null || root.value === target) {
      return 0;
    }
  
    if (root.value > target) {
      return 1 + findNodeDistance(root.left, target);
    } else {
      return 1 + findNodeDistance(root.right, target);
    }
  }
  
  // Example usage
  const root = new TreeNode(8);
  root.left = new TreeNode(3);
  root.right = new TreeNode(10);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.left.right.left = new TreeNode(4);
  root.left.right.right = new TreeNode(7);
  root.right.right = new TreeNode(14);
  root.right.right.left = new TreeNode(13);
  
  console.log("BST:");
  console.log(root);
  
  const node1 = 6;
  const node2 = 14;
  const distance = findDistance(root, node1, node2);
  
  console.log(`The distance between ${node1} and ${node2} is ${distance}`);
  