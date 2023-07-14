function findLHS(nums) {
    const freqMap = new Map();
  
    for (let num of nums) {
      if (freqMap.has(num)) {
        freqMap.set(num, freqMap.get(num) + 1);
      } else {
        freqMap.set(num, 1);
      }
    }
  
    let maxLen = 0;
  
    for (let [num, count] of freqMap) {
      if (freqMap.has(num + 1)) {
        const subseqLen = count + freqMap.get(num + 1);
        maxLen = Math.max(maxLen, subseqLen);
      }
    }
  
    return maxLen;
  }
  
  // Example usage
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const result = findLHS(nums);
  console.log(result); // Output: 5
  