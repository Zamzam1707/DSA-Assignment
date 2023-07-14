// Node class definition
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function detectAndRemoveLoop(head) {
    let slow = head;
    let fast = head;
  
    // Detect the loop using the slow and fast pointers
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        break; // Loop detected
      }
    }
  
    // If no loop is detected, return
    if (!fast || !fast.next) {
      return;
    }
  
    // Move slow to the head and advance slow and fast pointers one step at a time until they meet again
    slow = head;
    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // Break the loop by setting the next pointer of the last node to null
    fast.next = null;
  }
  
  // Create the linked list
  const head1 = new Node(1);
  head1.next = new Node(3);
  head1.next.next = new Node(4);
  head1.next.next.next = head1.next; // Create a loop by connecting the last node to the second node
  
  const head2 = new Node(1);
  head2.next = new Node(8);
  head2.next.next = new Node(3);
  head2.next.next.next = new Node(4);
  
  const head3 = new Node(1);
  head3.next = new Node(2);
  head3.next.next = new Node(3);
  head3.next.next.next = new Node(4);
  head3.next.next.next.next = head3; // Create a loop by connecting the last node to the first node
  
  // Testing the function
  detectAndRemoveLoop(head1);
  detectAndRemoveLoop(head2);
  detectAndRemoveLoop(head3);
  
  // Print the modified linked lists
  let current = head1;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  