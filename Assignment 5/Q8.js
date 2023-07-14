function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const count = new Map();
  
    // Count the frequency of each number in the changed array
    for (const num of changed) {
      count.set(num, (count.get(num) || 0) + 1);
    }
  
    const original = [];
  
    // Iterate through the changed array and reconstruct the original array
    for (const num of changed) {
      if (count.get(num) === 0) {
        continue;
      }
  
      const doubled = num * 2;
  
      if (count.get(doubled) === undefined || count.get(doubled) === 0) {
        return [];
      }
  
      original.push(num);
      count.set(num, count.get(num) - 1);
      count.set(doubled, count.get(doubled) - 1);
    }
  
    return original;
  }
  
  const changed = [1, 3, 4, 2, 6, 8];
  
  console.log(findOriginalArray(changed));
  // Output: [1, 3, 4]
  