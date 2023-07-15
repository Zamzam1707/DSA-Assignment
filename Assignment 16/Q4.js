function checkIncreasingOrder(queue) {
    const stack = [];
    const newQueue = [];
  
    while (queue.length > 0) {
      const front = queue.shift(); // Pop (Dequeue) element from the given Queue
  
      if (front === Math.min(...queue)) {
        // If the front element is the minimum element in the remaining queue,
        // push it to the new queue directly
        newQueue.push(front);
      } else if (stack.length > 0 && stack[stack.length - 1] < front) {
        // If the front element is greater than the top of the stack,
        // it means it can be pushed to the new queue after popping the stack elements
        while (stack.length > 0 && stack[stack.length - 1] < front) {
          newQueue.push(stack.pop());
        }
        newQueue.push(front);
      } else {
        // Push the front element to the stack
        stack.push(front);
      }
    }
  
    // Empty the remaining stack elements to the new queue
    while (stack.length > 0) {
      newQueue.push(stack.pop());
    }
  
    // Check if the new queue is sorted in increasing order
    for (let i = 0; i < newQueue.length - 1; i++) {
      if (newQueue[i] > newQueue[i + 1]) {
        return "No";
      }
    }
  
    return "Yes";
  }
  
  // Example usage:
  const queue1 = [5, 1, 2, 3, 4];
  console.log(checkIncreasingOrder(queue1)); // Output: Yes
  
  const queue2 = [5, 1, 2, 6, 3, 4];
  console.log(checkIncreasingOrder(queue2)); // Output: No
  