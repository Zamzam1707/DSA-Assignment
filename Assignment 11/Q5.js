function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();
  
    // Iterate through nums2 and check for common elements in set1
    for (const num of nums2) {
      if (set1.has(num)) {
        result.add(num);
      }
    }
  
    // Convert the result set to an array and return it
    return Array.from(result);
  }
  
  // Testing the function
  console.log(intersection([1, 2, 2, 1], [2, 2]));                 // Output: [2]
  console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));         // Output: [9, 4]
  