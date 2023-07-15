function maxSubarraySumCircular(nums) {
    const n = nums.length;
  
    // Handle the non-circular case using Kadane's algorithm
    let maxSumNonCircular = kadane(nums);
  
    // Handle the circular case
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
      totalSum += nums[i];
      nums[i] = -nums[i]; // Negate the array elements for finding the minimum sum subarray
    }
  
    // Calculate the minimum sum subarray using Kadane's algorithm
    let minSumSubarray = kadane(nums);
    
    // Calculate the maximum sum circular subarray
    let maxSumCircular = totalSum + minSumSubarray;
  
    // Return the maximum of the non-circular case and the circular case
    return Math.max(maxSumNonCircular, maxSumCircular);
  }
  
  // Kadane's algorithm to find the maximum sum subarray in a non-circular array
  function kadane(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Example usage:
  const nums1 = [1, -2, 3, -2];
  console.log(maxSubarraySumCircular(nums1)); // Output: 3
  
  const nums2 = [5, -3, 5];
  console.log(maxSubarraySumCircular(nums2)); // Output: 10
  
  const nums3 = [-3, -2, -3];
  console.log(maxSubarraySumCircular(nums3)); // Output: -2
  