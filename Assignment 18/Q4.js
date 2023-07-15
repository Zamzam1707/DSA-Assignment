function maximumGap(nums) {
    const n = nums.length;
  
    if (n < 2) {
      return 0;
    }
  
    let minNum = Infinity;
    let maxNum = -Infinity;
  
    // Find the minimum and maximum elements in the array
    for (let i = 0; i < n; i++) {
      minNum = Math.min(minNum, nums[i]);
      maxNum = Math.max(maxNum, nums[i]);
    }
  
    const bucketSize = Math.max(1, Math.ceil((maxNum - minNum) / (n - 1)));
  
    const numBuckets = Math.ceil((maxNum - minNum) / bucketSize);
    const minBucket = new Array(numBuckets).fill(Infinity);
    const maxBucket = new Array(numBuckets).fill(-Infinity);
  
    // Update the minimum and maximum values in each bucket
    for (let i = 0; i < n; i++) {
      const bucketIndex = Math.floor((nums[i] - minNum) / bucketSize);
      minBucket[bucketIndex] = Math.min(minBucket[bucketIndex], nums[i]);
      maxBucket[bucketIndex] = Math.max(maxBucket[bucketIndex], nums[i]);
    }
  
    let prevMax = minNum;
    let maxDiff = 0;
  
    // Calculate the maximum difference between buckets
    for (let i = 0; i < numBuckets; i++) {
      if (minBucket[i] !== Infinity) {
        maxDiff = Math.max(maxDiff, minBucket[i] - prevMax);
        prevMax = maxBucket[i];
      }
    }
  
    return maxDiff;
  }
  
  // Example usage:
  const nums = [3, 6, 9, 1];
  console.log(maximumGap(nums)); // Output: 3
  