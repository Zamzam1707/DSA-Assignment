// Node class definition
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function removeDuplicates(head) {
    if (!head) {
      return null; // If the list is empty, return null
    }
  
    let current = head;
  
    while (current && current.next) {
      if (current.data === current.next.data) {
        current.next = current.next.next; // Skip the duplicate node
      } else {
        current = current.next; // Move to the next node
      }
    }
  
    return head;
  }
  
  // Create the linked list
  const head = new Node(11);
  head.next = new Node(11);
  head.next.next = new Node(11);
  head.next.next.next = new Node(21);
  head.next.next.next.next = new Node(43);
  head.next.next.next.next.next = new Node(43);
  head.next.next.next.next.next.next = new Node(60);
  
  // Remove duplicates from the linked list
  const newHead = removeDuplicates(head);
  
  // Print the modified linked list
  let current = newHead;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  