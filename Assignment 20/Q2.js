function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  function constructBST(levelOrder) {
    if (levelOrder.length === 0) {
      return null;
    }
  
    const root = new TreeNode(levelOrder[0]);
    const left = [];
    const right = [];
  
    for (let i = 1; i < levelOrder.length; i++) {
      if (levelOrder[i] < root.val) {
        left.push(levelOrder[i]);
      } else {
        right.push(levelOrder[i]);
      }
    }
  
    root.left = constructBST(left);
    root.right = constructBST(right);
  
    return root;
  }

  
  const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const root = constructBST(levelOrder);

console.log(root);
