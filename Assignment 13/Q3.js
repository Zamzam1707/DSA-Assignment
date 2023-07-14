// Node class definition
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function reverseKNodes(head, k) {
    if (!head || k <= 1) {
      return head; // If the list is empty or k is 1, return the list as is
    }
  
    let current = head;
    let previous = null;
    let next = null;
    let count = 0;
  
    // Reverse the first k nodes
    while (current && count < k) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      count++;
    }
  
    // Recursively reverse the remaining nodes
    if (next) {
      head.next = reverseKNodes(next, k);
    }
  
    return previous; // Return the new head of the reversed group
  }
  
  // Create the linked list
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(2);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);
  
  // Reverse every 4 nodes
  const k = 4;
  const newHead = reverseKNodes(head, k);
  
  // Print the modified linked list
  let current = newHead;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  