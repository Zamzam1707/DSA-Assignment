function findAnagrams(s, p) {
    const targetMap = new Map();
    const windowMap = new Map();
    const result = [];
  
    for (const char of p) {
      targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }
  
    let left = 0;
    let right = 0;
    let count = p.length;
  
    while (right < s.length) {
      const char = s[right];
  
      if (targetMap.has(char)) {
        windowMap.set(char, (windowMap.get(char) || 0) + 1);
        if (windowMap.get(char) <= targetMap.get(char)) {
          count--;
        }
      }
  
      right++;
  
      if (count === 0) {
        result.push(left);
      }
  
      if (right - left === p.length) {
        const char = s[left];
        if (targetMap.has(char)) {
          if (windowMap.get(char) <= targetMap.get(char)) {
            count++;
          }
          windowMap.set(char, windowMap.get(char) - 1);
        }
        left++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const s = "cbaebabacd";
  const p = "abc";
  console.log(findAnagrams(s, p)); // Output: [0, 6]
  