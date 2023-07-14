function findNthFromEnd(head, N) {
    let slow = head;
    let fast = head;
    let count = 0;
  
    // Move the fast pointer N nodes ahead
    while (count < N) {
      if (!fast) {
        return -1; // N is greater than the number of nodes
      }
      fast = fast.next;
      count++;
    }
  
    // Move both pointers until the fast pointer reaches the end
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }
  
    return slow.data; // Nth node from the end
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
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);
  head.next.next.next.next.next.next.next.next = new Node(9);
  
  // Testing the function
  console.log(findNthFromEnd(head, 2)); // Output: 8
  console.log(findNthFromEnd(head, 5)); // Output: -1
  