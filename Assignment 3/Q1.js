function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum > target) {
        right--;
      } else if (currentSum < target) {
        left++;
      } else {
        // If the current sum is equal to the target, return the sum directly
        return currentSum;
      }
    }
  }

  return closestSum;
}

// Example usage
const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSumClosest(nums, target);
console.log(result); // Output: 2
