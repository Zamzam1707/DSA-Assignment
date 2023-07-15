function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
    const merged = mergeSort(nums, 0, nums.length - 1, counts);
    return counts;
  }
  
  function mergeSort(nums, start, end, counts) {
    if (start >= end) {
      return [nums[start]];
    }
  
    const mid = Math.floor((start + end) / 2);
    const left = mergeSort(nums, start, mid, counts);
    const right = mergeSort(nums, mid + 1, end, counts);
  
    const merged = [];
    let i = 0; // Pointer for the left subarray
    let j = 0; // Pointer for the right subarray
  
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        // Increment the count for elements in the right subarray that are smaller
        counts[start + i]++;
        merged.push(right[j]);
        j++;
      } else {
        merged.push(left[i]);
        i++;
      }
    }
  
    while (i < left.length) {
      merged.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }
  
    return merged;
  }
  