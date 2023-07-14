function findNearestSmallerNumbers(arr) {
    const result = [];
    const stack = [];
  
    // Iterate through the array from left to right
    for (let i = 0; i < arr.length; i++) {
      // Pop elements from the stack until we find a smaller element or the stack becomes empty
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
  
      // If the stack is empty, there is no smaller element on the left
      if (stack.length === 0) {
        result.push(-1); // Add -1 to the result array
      } else {
        result.push(stack[stack.length - 1]); // Add the smaller element to the result array
      }
  
      stack.push(arr[i]); // Push the current element to the stack
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 6, 2];
  console.log(findNearestSmallerNumbers(arr1)); // Output: [-1, 1, 1]
  
  const arr2 = [1, 5, 0, 3, 4, 5];
  console.log(findNearestSmallerNumbers(arr2)); // Output: [-1, 1, -1, 0, 3, 4]
  