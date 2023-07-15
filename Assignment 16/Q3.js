function deleteMiddle(stack, k) {
    // Base case: if the stack is empty or we have reached the middle element
    if (stack.length === 0 || k === 0) {
      stack.pop(); // Remove the middle element
      return;
    }
  
    // Remove the top element and recur for the remaining elements
    const temp = stack.pop();
    deleteMiddle(stack, k - 1);
  
    // Push the elements back into the stack after removing the middle element
    stack.push(temp);
  }
  
  function deleteMiddleElement(stack) {
    const middle = Math.ceil(stack.length / 2); // Find the middle index
    deleteMiddle(stack, middle - 1);
  }
  
  // Example usage:
  const stack1 = [1, 2, 3, 4, 5];
  deleteMiddleElement(stack1);
  console.log(stack1); // Output: [1, 2, 4, 5]
  
  const stack2 = [1, 2, 3, 4, 5, 6];
  deleteMiddleElement(stack2);
  console.log(stack2); // Output: [1, 2, 4, 5, 6]
  