function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[right]) {
        // Minimum element is on the right side
        left = mid + 1;
      } else {
        // Minimum element is on the left side or is the mid element itself
        right = mid;
      }
    }
  
    return nums[left];
  }
  
  // Testing the function
  console.log(findMin([3, 4, 5, 1, 2]));              // Output: 1
  console.log(findMin([4, 5, 6, 7, 0, 1, 2]));       // Output: 0
  console.log(findMin([11, 13, 15, 17]));           // Output: 11
  