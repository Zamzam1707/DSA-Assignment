function sortArray(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
  }
  
  function quickSort(nums, start, end) {
    if (start >= end) {
      return;
    }
  
    const pivotIndex = partition(nums, start, end);
    quickSort(nums, start, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, end);
  }
  
  function partition(nums, start, end) {
    const pivot = nums[end];
    let partitionIndex = start;
  
    for (let i = start; i < end; i++) {
      if (nums[i] < pivot) {
        swap(nums, i, partitionIndex);
        partitionIndex++;
      }
    }
  
    swap(nums, partitionIndex, end);
    return partitionIndex;
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  