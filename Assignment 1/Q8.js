function findErrorNums(nums) {
    const n = nums.length;
    let xor = 0;
  
    // XOR all elements in nums and the numbers from 1 to n
    for (let num of nums) {
      xor ^= num;
    }
    for (let i = 1; i <= n; i++) {
      xor ^= i;
    }
  
    // Find the rightmost set bit in xor
    const rightmostBit = xor & -xor;
  
    let num1 = 0;
    let num2 = 0;
  
    // Separate the elements in nums into num1 and num2 based on the rightmost set bit
    for (let num of nums) {
      if ((num & rightmostBit) !== 0) {
        num1 ^= num;
      } else {
        num2 ^= num;
      }
    }
  
    // Separate the numbers from 1 to n into num1 and num2 based on the rightmost set bit
    for (let i = 1; i <= n; i++) {
      if ((i & rightmostBit) !== 0) {
        num1 ^= i;
      } else {
        num2 ^= i;
      }
    }
  
    // Iterate through nums to determine if num1 or num2 is the missing number
    for (let num of nums) {
      if (num === num1) {
        return [num1, num2];
      }
    }
  
    return [num2, num1];
  }
  
  // Example usage
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result); // Output: [2, 3]
  