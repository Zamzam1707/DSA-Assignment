// Node class definition for doubly linked list
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Function to reverse a doubly linked list
  function reverseDoublyLinkedList(head) {
    // If the list is empty or has only one node, return the list as is
    if (!head || !head.next) {
      return head;
    }
  
    let current = head;
    let temp = null;
  
    // Swap the next and prev pointers of each node
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // Move to the next node
    }
  
    // Update the head to the last node of the original list
    if (temp) {
      head = temp.prev;
    }
  
    return head;
  }
  
  // Create the doubly linked list
  const head = new Node(10);
  const node2 = new Node(8);
  const node3 = new Node(4);
  const node4 = new Node(2);
  
  head.next = node2;
  node2.prev = head;
  node2.next = node3;
  node3.prev = node2;
  node3.next = node4;
  node4.prev = node3;
  
  // Reverse the doubly linked list
  const reversedHead = reverseDoublyLinkedList(head);
  
  // Print the reversed list
  let current = reversedHead;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  