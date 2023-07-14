function validMountainArray(arr) {
    const n = arr.length;
    
    if (n < 3) {
      return false;
    }
  
    let left = 0;
    let right = n - 1;
  
    while (left < right) {
      if (arr[left] >= arr[left + 1] || arr[right] >= arr[right - 1]) {
        return false;
      }
      if (arr[left] < arr[left + 1]) {
        left++;
      }
      if (arr[right] < arr[right - 1]) {
        right--;
      }
    }
  
    return left === right && arr[left] > arr[left - 1] && arr[left] > arr[left + 1];
  }
  
  // Example usage:
  const arr = [2, 1];
  console.log(validMountainArray(arr)); // Output: false
  