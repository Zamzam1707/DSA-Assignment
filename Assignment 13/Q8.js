// Node class definition for doubly linked list
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Function to delete a node from a given position in a doubly linked list
  function deleteNodeFromPosition(head, position) {
    // If the list is empty, return the list as is
    if (!head) {
      return head;
    }
  
    // If the position is 1, update the head
    if (position === 1) {
      head = head.next;
      if (head) {
        head.prev = null;
      }
      return head;
    }
  
    let current = head;
    let count = 1;
  
    // Traverse the list to find the node at the given position
    while (current && count < position) {
      current = current.next;
      count++;
    }
  
    // If the position is invalid, return the list as is
    if (!current) {
      return head;
    }
  
    // Update the prev and next pointers of the adjacent nodes to bypass the current node
    if (current.prev) {
      current.prev.next = current.next;
    }
    if (current.next) {
      current.next.prev = current.prev;
    }
  
    return head;
  }
  
  // Create the doubly linked list
  const head = new Node(1);
  const node2 = new Node(5);
  const node3 = new Node(2);
  const node4 = new Node(9);
  
  head.next = node2;
  node2.prev = head;
  node2.next = node3;
  node3.prev = node2;
  node3.next = node4;
  node4.prev = node3;
  
  // Delete a node from position 1
  const positionToDelete = 1;
  const newHead = deleteNodeFromPosition(head, positionToDelete);
  
  // Print the updated list
  let current = newHead;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  