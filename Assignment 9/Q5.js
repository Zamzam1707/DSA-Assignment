function findMax(arr, index) {
    // Base case: If index reaches the end of the array, return the element at that index
    if (index === arr.length - 1) {
      return arr[index];
    }
  
    // Recursive case: Compare the current element with the maximum element in the remaining array
    const current = arr[index];
    const maxInRest = findMax(arr, index + 1);
  
    // Return the maximum of the current element and the maximum element in the remaining array
    return Math.max(current, maxInRest);
  }
  
  // Testing the function
  const arr1 = [1, 4, 3, -5, -4, 8, 6];
  console.log(findMax(arr1, 0)); // Output: 8
  
  const arr2 = [1, 4, 45, 6, 10, -8];
  console.log(findMax(arr2, 0)); // Output: 45
  