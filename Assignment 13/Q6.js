// Node class definition
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function mergeSortedLists(a, b) {
    // If one list is empty, return the other list
    if (!a) {
      return b;
    }
    if (!b) {
      return a;
    }
  
    let result = null;
    let tail = null;
  
    // Set the head of the merged list based on the first node
    if (a.data <= b.data) {
      result = a;
      a = a.next;
    } else {
      result = b;
      b = b.next;
    }
    tail = result;
  
    // Merge the remaining nodes
    while (a && b) {
      if (a.data <= b.data) {
        tail.next = a;
        a = a.next;
      } else {
        tail.next = b;
        b = b.next;
      }
      tail = tail.next;
    }
  
    // Append the remaining nodes of list a or b, if any
    if (a) {
      tail.next = a;
    }
    if (b) {
      tail.next = b;
    }
  
    return result;
  }
  
  // Create the first linked list
  const a = new Node(5);
  a.next = new Node(10);
  a.next.next = new Node(15);
  
  // Create the second linked list
  const b = new Node(2);
  b.next = new Node(3);
  b.next.next = new Node(20);
  
  // Merge the two sorted linked lists
  const mergedHead = mergeSortedLists(a, b);
  
  // Print the merged list
  let current = mergedHead;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  