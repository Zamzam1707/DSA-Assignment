function sortedSquares(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    let index = n - 1;
  
    while (left <= right) {
      const squareLeft = nums[left] ** 2;
      const squareRight = nums[right] ** 2;
  
      if (squareLeft > squareRight) {
        result[index] = squareLeft;
        left++;
      } else {
        result[index] = squareRight;
        right--;
      }
  
      index--;
    }
  
    return result;
  }
  
  const nums = [-4, -1, 0, 3, 10];
  
  console.log(sortedSquares(nums));
  // Output: [0, 1, 9, 16, 100]
  