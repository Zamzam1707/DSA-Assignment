function twoSum(nums, target) {
  const hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashmap.has(complement)) {
      return [hashmap.get(complement), i];
    }

    hashmap.set(nums[i], i);
  }

  return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
