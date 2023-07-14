// Node class definition
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function deleteLastOccurrence(head, key) {
    if (!head) {
      return head; // If the list is empty, return the list as is
    }
  
    let current = head;
    let prev = null;
    let lastOccurrence = null;
    let prevLastOccurrence = null;
  
    // Traverse the list to find the last occurrence and its previous node
    while (current) {
      if (current.data === key) {
        lastOccurrence = current;
        prevLastOccurrence = prev;
      }
      prev = current;
      current = current.next;
    }
  
    // If the last occurrence is found, remove it from the list
    if (lastOccurrence) {
      if (!prevLastOccurrence) {
        // If the last occurrence is the head node
        head = head.next;
      } else {
        prevLastOccurrence.next = lastOccurrence.next;
      }
    }
  
    return head;
  }
  
  // Create the linked list
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(5);
  head.next.next.next.next = new Node(2);
  head.next.next.next.next.next = new Node(10);
  
  // Delete the last occurrence of key = 2
  const key = 2;
  const newHead = deleteLastOccurrence(head, key);
  
  // Print the modified linked list
  let current = newHead;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  