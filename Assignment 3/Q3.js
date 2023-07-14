function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;
  
    // Find the first pair where nums[i] < nums[i+1]
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      // Find the smallest element to the right of nums[i] that is greater than nums[i]
      let j = n - 1;
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
      // Swap nums[i] and nums[j]
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    // Reverse the subarray to the right of index i
    reverse(nums, i + 1, n - 1);
  
    return nums;
  }
  
  // Utility function to reverse a subarray within the given range
  function reverse(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  
  // Example usage
  const nums = [1, 2, 3];
  const result = nextPermutation(nums);
  console.log(result); // Output: [1, 3, 2]
  