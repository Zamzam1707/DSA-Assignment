function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[mid + 1]) {
        // Current element is greater than the next element
        // Move towards the left half
        right = mid;
      } else {
        // Current element is smaller than or equal to the next element
        // Move towards the right half
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  // Testing the function
  console.log(findPeakElement([1, 2, 3, 1]));               // Output: 2
  console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));     // Output: 5
  