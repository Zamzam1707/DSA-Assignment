function checkValidString(s) {
    const leftStack = [];
    const starStack = [];
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
  
      if (c === '(') {
        leftStack.push(i);
      } else if (c === '*') {
        starStack.push(i);
      } else if (c === ')') {
        if (leftStack.length > 0) {
          leftStack.pop();
        } else if (starStack.length > 0) {
          starStack.pop();
        } else {
          return false;
        }
      }
    }
  
    while (leftStack.length > 0 && starStack.length > 0) {
      const leftIndex = leftStack.pop();
      const starIndex = starStack.pop();
  
      if (leftIndex > starIndex) {
        return false;
      }
    }
  
    return leftStack.length === 0;
  }
  
  // Example usage:
  const s = '()';
  console.log(checkValidString(s)); // Output: true
  