function reverseFirstK(queue, k) {
    const stack = [];
    const size = queue.length;
  
    // Push the first k elements into the stack
    for (let i = 0; i < k; i++) {
      stack.push(queue.shift());
    }
  
    // Enqueue the elements from the stack back into the queue in reverse order
    while (stack.length > 0) {
      queue.push(stack.pop());
    }
  
    // Move the remaining elements to the end of the queue
    for (let i = 0; i < size - k; i++) {
      queue.push(queue.shift());
    }
  }
  
  // Example usage:
  const queue = [1, 2, 3, 4, 5];
  const k = 3;
  reverseFirstK(queue, k);
  console.log(queue); // Output: [3, 2, 1, 4, 5]
  