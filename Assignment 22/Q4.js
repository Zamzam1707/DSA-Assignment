function isSameTree(inorder, preorder, postorder) {
    if (
      inorder.length === 0 ||
      preorder.length === 0 ||
      postorder.length === 0
    ) {
      return true;
    }
  
    if (
      inorder.length !== preorder.length ||
      preorder.length !== postorder.length
    ) {
      return false;
    }
  
    // Check if the first element of the preorder traversal matches the first element of the postorder traversal
    if (preorder[0] !== postorder[postorder.length - 1]) {
      return false;
    }
  
    // Find the position of the root in the inorder traversal
    const rootIndex = inorder.indexOf(preorder[0]);
  
    // Split the inorder traversal into left and right subtrees
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);
  
    // Split the preorder traversal into left and right subtrees
    const leftPreorder = preorder.slice(1, rootIndex + 1);
    const rightPreorder = preorder.slice(rootIndex + 1);
  
    // Split the postorder traversal into left and right subtrees
    const leftPostorder = postorder.slice(0, rootIndex);
    const rightPostorder = postorder.slice(rootIndex, postorder.length - 1);
  
    // Recursively check if the left and right subtrees satisfy the same conditions
    const leftSubtree = isSameTree(leftInorder, leftPreorder, leftPostorder);
    const rightSubtree = isSameTree(rightInorder, rightPreorder, rightPostorder);
  
    return leftSubtree && rightSubtree;
  }
  
  // Example usage
  const inorder = [4, 2, 5, 1, 3];
  const preorder = [1, 2, 4, 5, 3];
  const postorder = [4, 5, 2, 3, 1];
  
  console.log(isSameTree(inorder, preorder, postorder)); // Output: true
  