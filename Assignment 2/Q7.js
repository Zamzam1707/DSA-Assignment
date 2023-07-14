function isMonotonic(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        isDecreasing = false;
      } else if (nums[i] < nums[i - 1]) {
        isIncreasing = false;
      }
    }
  
    return isIncreasing || isDecreasing;
  }
  
  // Example usage
  const nums = [1, 2, 2, 3];
  const result = isMonotonic(nums);
  console.log(result); // Output: true
  