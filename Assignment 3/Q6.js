function singleNumber(nums) {
    let result = 0;
  
    for (let num of nums) {
      result ^= num;
    }
  
    return result;
  }
  
  // Example usage
  const nums = [2, 2, 1];
  const result = singleNumber(nums);
  console.log(result); // Output: 1
  