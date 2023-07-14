function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (nums[middle] === target) {
        return middle;
      } else if (nums[middle] > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  
    return left;
  }
  
  // Example usage
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = searchInsert(nums, target);
  console.log(result); // Output: 2
  