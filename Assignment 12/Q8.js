// Node class definition
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function isCircular(head) {
    if (!head) {
      return false; // An empty list is not circular
    }
  
    let slow = head;
    let fast = head.next;
  
    while (fast && fast.next) {
      if (slow === fast) {
        return true; // Cycle detected
      }
  
      slow = slow.next;
      fast = fast.next.next;
    }
  
    return false; // No cycle found
  }
  
  // Create a circular linked list
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = head; // Connect the last node to the first node
  
  // Check if the linked list is circular
  const circular = isCircular(head);
  
  console.log(circular); // Output: true
  