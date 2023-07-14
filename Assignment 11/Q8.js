function intersect(nums1, nums2) {
    const map = new Map();
    const result = [];
  
    // Store the frequency of elements in nums1
    for (const num of nums1) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  
    // Iterate through nums2 and check for common elements and their frequencies
    for (const num of nums2) {
      if (map.has(num) && map.get(num) > 0) {
        result.push(num);
        map.set(num, map.get(num) - 1);
      }
    }
  
    return result;
  }
  
  // Testing the function
  console.log(intersect([1, 2, 2, 1], [2, 2]));                  // Output: [2, 2]
  console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));           // Output: [4, 9]
  