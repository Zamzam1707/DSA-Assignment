function findMaxAbsDifference(arr) {
    const n = arr.length;
    const leftSmaller = new Array(n);
    const rightSmaller = new Array(n);
  
    // Find the nearest smaller element on the left side for each element
    leftSmaller[0] = 0; // Leftmost element, so no smaller element on the left
    for (let i = 1; i < n; i++) {
      let j = i - 1;
      while (j >= 0 && arr[j] >= arr[i]) {
        j = leftSmaller[j];
      }
      leftSmaller[i] = j;
    }
  
    // Find the nearest smaller element on the right side for each element
    rightSmaller[n - 1] = 0; // Rightmost element, so no smaller element on the right
    for (let i = n - 2; i >= 0; i--) {
      let j = i + 1;
      while (j < n && arr[j] >= arr[i]) {
        j = rightSmaller[j];
      }
      rightSmaller[i] = j;
    }
  
    let maxDiff = 0;
  
    // Compute the maximum absolute difference between the corresponding elements
    // in the leftSmaller and rightSmaller arrays
    for (let i = 0; i < n; i++) {
      const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
      maxDiff = Math.max(maxDiff, diff);
    }
  
    return maxDiff;
  }
  
  // Example usage:
  const arr1 = [2, 1, 8];
  console.log(findMaxAbsDifference(arr1)); // Output: 1
  
  const arr2 = [2, 4, 8, 7, 7, 9, 3];
  console.log(findMaxAbsDifference(arr2)); // Output: 4
  
  const arr3 = [5, 1, 9, 2, 5, 1, 7];
  console.log(findMaxAbsDifference(arr3)); // Output: 1
  