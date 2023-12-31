function arrayPairSum(nums) {
  nums.sort((a, b) => a - b);

  let maxSum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    maxSum += nums[i];
  }

  return maxSum;
}

// Example usage
const nums = [1, 4, 3, 2];
const result = arrayPairSum(nums);
console.log(result); // Output: 4
