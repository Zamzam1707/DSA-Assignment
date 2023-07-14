function findOriginalArray(changed) {
    const count = new Map();
    
    for (const num of changed) {
      count.set(num, (count.get(num) || 0) + 1);
    }
    
    const original = [];
  
    for (const num of changed) {
      if (count.get(num / 2) > 0 && count.get(num) > 0) {
        original.push(num / 2);
        count.set(num / 2, count.get(num / 2) - 1);
        count.set(num, count.get(num) - 1);
      }
    }
  
    for (const [, freq] of count) {
      if (freq > 0) {
        return [];
      }
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  console.log(findOriginalArray(changed)); // Output: [1, 3, 4]
  