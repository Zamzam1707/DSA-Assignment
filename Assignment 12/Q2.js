function hasLoop(head) {
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true; // Loop detected
      }
    }
  
    return false; // No loop detected
  }
  
  // Node class definition
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Create the linked list
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = head.next; // Create a loop by connecting the last node to the second node
  
  // Testing the function
  console.log(hasLoop(head)); // Output: true
  