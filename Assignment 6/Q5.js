function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
  
    let minProductSum = 0;
  
    for (let i = 0; i < nums1.length; i++) {
      minProductSum += nums1[i] * nums2[nums1.length - i - 1];
    }
  
    return minProductSum;
  }
  
  // Example usage:
  const nums1 = [5, 3, 4, 2];
  const nums2 = [4, 2, 2, 5];
  console.log(minProductSum(nums1, nums2)); // Output: 40
  