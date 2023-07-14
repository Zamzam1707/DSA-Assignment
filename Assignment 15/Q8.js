class MinStack {
    constructor() {
      this.stack = []; // Main stack to store elements
      this.minStack = []; // Auxiliary stack to store minimum values
    }
  
    push(val) {
      this.stack.push(val);
  
      // Update the minimum stack if it's empty or the new value is less than or equal to the current minimum
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1].val) {
        this.minStack.push({ val, count: 1 });
      } else {
        // Increment the count of the current minimum value in the minStack
        this.minStack[this.minStack.length - 1].count++;
      }
    }
  
    pop() {
      const poppedValue = this.stack.pop();
  
      // If the popped value is the current minimum, decrement its count in the minStack
      if (poppedValue === this.minStack[this.minStack.length - 1].val) {
        this.minStack[this.minStack.length - 1].count--;
  
        // If the count becomes 0, remove the element from the minStack
        if (this.minStack[this.minStack.length - 1].count === 0) {
          this.minStack.pop();
        }
      }
    }
  
    top() {
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1].val;
    }
  }
  
  // Example usage:
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log(minStack.getMin()); // Output: -3
  minStack.pop();
  console.log(minStack.top()); // Output: 0
  console.log(minStack.getMin()); // Output: -2
  