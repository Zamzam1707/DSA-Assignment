class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.items.length === 0) {
        return null; // Stack is empty
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    reverse() {
      if (!this.isEmpty()) {
        // Remove the top item from the stack
        const item = this.pop();
  
        // Reverse the remaining stack
        this.reverse();
  
        // Insert the item at the bottom of the reversed stack
        this.insertAtBottom(item);
      }
    }
  
    insertAtBottom(item) {
      if (this.isEmpty()) {
        // If the stack is empty, insert the item
        this.push(item);
      } else {
        // Remove all items from the stack and insert them at the bottom recursively
        const temp = this.pop();
        this.insertAtBottom(item);
        this.push(temp);
      }
    }
  
    printStack() {
      let stackString = '';
      for (let i = 0; i < this.items.length; i++) {
        stackString += this.items[i] + ' ';
      }
      console.log(stackString.trim());
    }
  }
  
  // Example usage:
  const stack1 = new Stack();
  stack1.push(3);
  stack1.push(2);
  stack1.push(1);
  stack1.push(7);
  stack1.push(6);
  
  stack1.reverse();
  stack1.printStack(); // Output: 6 7 1 2 3
  
  const stack2 = new Stack();
  stack2.push(4);
  stack2.push(3);
  stack2.push(9);
  stack2.push(6);
  
  stack2.reverse();
  stack2.printStack(); // Output: 6 9 3 4
  