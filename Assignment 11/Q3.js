function missingNumber(nums) {
    const n = nums.length;
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = nums.reduce((sum, num) => sum + num, 0);
    return totalSum - arraySum;
  }
  
  // Testing the function
  console.log(missingNumber([3, 0, 1]));                          // Output: 2
  console.log(missingNumber([0, 1]));                             // Output: 2
  console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));        // Output: 8
  