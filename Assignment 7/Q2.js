function isStrobogrammatic(num) {
    const strobogrammaticMap = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6',
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      if (!strobogrammaticMap.hasOwnProperty(num[left]) || strobogrammaticMap[num[left]] !== num[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  // Example usage:
  const num = '69';
  console.log(isStrobogrammatic(num)); // Output: true
  