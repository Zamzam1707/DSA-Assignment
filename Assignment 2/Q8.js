function minDifference(nums, k) {
    if (nums.length <= 1) {
      return 0;
    }
  
    const minElement = Math.min(...nums);
    const maxElement = Math.max(...nums);
  
    if (maxElement - minElement <= 2 * k) {
      return 0;
    }
  
    const updatedMax = Math.max(minElement + k, maxElement - k);
    const updatedMin = minElement + k;
  
    return updatedMax - updatedMin;
  }
  
  // Example usage
  const nums = [1];
  const k = 0;
  const result = minDifference(nums, k);
  console.log(result); // Output: 0
  