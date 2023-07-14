function search(nums, target) {
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
  
    return -1;
  }
  
  // Example usage
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const result = search(nums, target);
  console.log(result); // Output: 4
  