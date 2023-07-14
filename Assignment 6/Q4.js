function findMaxLength(nums) {
    const sumIndices = { 0: -1 };
    let maxLen = 0;
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i] === 1 ? 1 : -1;
  
      if (sum in sumIndices) {
        maxLen = Math.max(maxLen, i - sumIndices[sum]);
      } else {
        sumIndices[sum] = i;
      }
    }
  
    return maxLen;
  }
  
  // Example usage:
  const nums = [0, 1];
  console.log(findMaxLength(nums)); // Output: 2
  