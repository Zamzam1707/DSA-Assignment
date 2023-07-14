function sortedSquares(nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const leftSquared = nums[left] * nums[left];
      const rightSquared = nums[right] * nums[right];
  
      if (leftSquared > rightSquared) {
        result.unshift(leftSquared);
        left++;
      } else {
        result.unshift(rightSquared);
        right--;
      }
    }
  
    for (let i = right; i >= left; i--) {
      result.unshift(nums[i] * nums[i]);
    }
  
    return result;
  }
  
  // Example usage
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result); // Output: [0, 1, 9, 16, 100]
  