function isLevelOrderBST(levelOrder) {
    if (levelOrder.length === 0) {
      return true;
    }
  
    const stack = [levelOrder[0]];
    let minValue = -Infinity;
    let maxValue = Infinity;
  
    for (let i = 1; i < levelOrder.length; i++) {
      const current = levelOrder[i];
  
      if (current <= stack[stack.length - 1]) {
        if (current < minValue || current > stack[stack.length - 1]) {
          return false;
        }
      } else {
        minValue = stack[stack.length - 1];
        while (stack.length > 0 && current > stack[stack.length - 1]) {
          minValue = stack[stack.length - 1];
          stack.pop();
        }
      }
  
      stack.push(current);
    }
  
    return stack.length === 0;
  }

  
  const levelOrder1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
console.log(isLevelOrderBST(levelOrder1)); // Output: true

const levelOrder2 = [11, 6, 13, 5, 12, 10];
console.log(isLevelOrderBST(levelOrder2)); // Output: false
