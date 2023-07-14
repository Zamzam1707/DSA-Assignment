function searchRange(nums, target) {
    const leftIndex = findLeftIndex(nums, target);
    const rightIndex = findRightIndex(nums, target);
    return [leftIndex, rightIndex];
  }
  
  function findLeftIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let leftIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] >= target) {
        right = mid - 1;
        if (nums[mid] === target) {
          leftIndex = mid;
        }
      } else {
        left = mid + 1;
      }
    }
  
    return leftIndex;
  }
  
  function findRightIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let rightIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] <= target) {
        left = mid + 1;
        if (nums[mid] === target) {
          rightIndex = mid;
        }
      } else {
        right = mid - 1;
      }
    }
  
    return rightIndex;
  }
  
  // Testing the function
  console.log(searchRange([5, 7, 7, 8, 8, 10], 8));    // Output: [3, 4]
  console.log(searchRange([5, 7, 7, 8, 8, 10], 6));    // Output: [-1, -1]
  console.log(searchRange([], 0));                    // Output: [-1, -1]
  