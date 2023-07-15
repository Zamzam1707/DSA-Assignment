class FrontMiddleBackQueue {
    constructor() {
      this.left = [];
      this.right = [];
    }
  
    pushFront(val) {
      this.left.unshift(val); // Add the value to the front of the left array
      this.balance(); // Balance the two arrays
    }
  
    pushMiddle(val) {
      const mid = Math.floor((this.left.length + this.right.length) / 2);
      if (this.left.length === this.right.length) {
        this.left.splice(mid, 0, val); // Add the value to the middle of the left array
      } else {
        this.right.splice(mid - this.left.length, 0, val); // Add the value to the middle of the right array
      }
      this.balance(); // Balance the two arrays
    }
  
    pushBack(val) {
      this.right.push(val); // Add the value to the back of the right array
      this.balance(); // Balance the two arrays
    }
  
    popFront() {
      if (this.isEmpty()) return -1;
      if (this.left.length === 0) {
        // If the left array is empty, move the first element of the right array to the left array
        this.left = this.right.splice(0, 1);
      }
      return this.left.shift(); // Remove and return the front element from the left array
    }
  
    popMiddle() {
      if (this.isEmpty()) return -1;
      const mid = Math.floor((this.left.length + this.right.length - 1) / 2);
      if (this.left.length > this.right.length) {
        // If the left array has more elements, remove and return the middle element from the left array
        return this.left.splice(mid, 1)[0];
      } else {
        // If the right array has more elements, remove and return the middle element from the right array
        return this.right.splice(mid - this.left.length, 1)[0];
      }
    }
  
    popBack() {
      if (this.isEmpty()) return -1;
      if (this.right.length === 0) {
        // If the right array is empty, move the last element of the left array to the right array
        this.right = [this.left.pop()];
      }
      return this.right.pop(); // Remove and return the back element from the right array
    }
  
    isEmpty() {
      return this.left.length === 0 && this.right.length === 0; // Check if both arrays are empty
    }
  
    balance() {
      if (this.left.length > this.right.length + 1) {
        // If the left array has more than one extra element compared to the right array
        this.right.unshift(this.left.pop()); // Move the last element of the left array to the front of the right array
      } else if (this.right.length > this.left.length) {
        // If the right array has more elements than the left array
        this.left.push(this.right.shift()); // Move the first element of the right array to the end of the left array
      }
    }
  }
  
  // Example usage:
  const q = new FrontMiddleBackQueue();
  q.pushFront(1);
  q.pushBack(2);
  q.pushMiddle(3);
  q.pushMiddle(4);
  console.log(q.popFront()); // Output: 1
  console.log(q.popMiddle()); // Output: 3
  console.log(q.popMiddle()); // Output: 4
  console.log(q.popBack()); // Output: 2
  console.log(q.popFront()); // Output: -1 (The queue is empty)
  