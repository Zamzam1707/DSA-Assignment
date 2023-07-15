function sortColors(nums) {
    let low = 0; // pointer for red objects
    let mid = 0; // pointer for white objects
    let high = nums.length - 1; // pointer for blue objects
  
    while (mid <= high) {
      if (nums[mid] === 0) {
        // Swap red object with white object
        swap(nums, low, mid);
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        // Increment mid pointer for white object
        mid++;
      } else {
        // Swap blue object with white object
        swap(nums, mid, high);
        high--;
      }
    }
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  // Example usage:
  const nums = [2, 0, 2, 1, 1, 0];
  sortColors(nums);
  console.log(nums); // Output: [0, 0, 1, 1, 2, 2]
  