function findDuplicate(nums) {
    let tortoise = nums[0];
    let hare = nums[0];
  
    // Phase 1: Find the intersection point
    do {
      tortoise = nums[tortoise];
      hare = nums[nums[hare]];
    } while (tortoise !== hare);
  
    // Phase 2: Find the start of the cycle
    tortoise = nums[0];
    while (tortoise !== hare) {
      tortoise = nums[tortoise];
      hare = nums[hare];
    }
  
    return hare;
  }
  
  // Testing the function
  console.log(findDuplicate([1, 3, 4, 2, 2]));    // Output: 2
  console.log(findDuplicate([3, 1, 3, 4, 2]));    // Output: 3
  