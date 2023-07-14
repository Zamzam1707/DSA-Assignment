class Stack {
    constructor() {
      this.q1 = []; // First queue
      this.q2 = []; // Second queue
    }
  
    push(item) {
      // Push the new item into q1
      this.q1.push(item);
    }
  
    pop() {
      if (this.q1.length === 0) {
        return -1; // Stack is empty, return -1
      }
  
      // Move all items from q1 to q2, except the last one
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
  
      // Get the last item from q1 (top of the stack)
      const poppedItem = this.q1.shift();
  
      // Swap q1 and q2
      const temp = this.q1;
      this.q1 = this.q2;
      this.q2 = temp;
  
      return poppedItem;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // Output: 3
  stack.push(4);
  console.log(stack.pop()); // Output: 4
  
  const stack2 = new Stack();
  stack2.push(2);
  console.log(stack2.pop()); // Output: 2
  console.log(stack2.pop()); // Output: -1
  stack2.push(3);
  console.log(stack2.pop()); // Output: 3
  