function removeElement(nums, val) {
    let k = 0; // Number of elements not equal to val
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }
  
    return k;
  }
  
  // Example usage
  const nums = [3, 2, 2, 3];
  const val = 3;
  const result = removeElement(nums, val);
  console.log(result); // Output: 2
  console.log(nums); // Output: [2, 2, _, _]
  