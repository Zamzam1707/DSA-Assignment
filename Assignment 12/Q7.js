// Node class definition
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function mergeAlternate(head1, head2) {
    if (!head1) {
      return head2; // If the first list is empty, return the second list
    }
    if (!head2) {
      return head1; // If the second list is empty, return the first list
    }
  
    let current1 = head1;
    let current2 = head2;
  
    while (current1 && current2) {
      let next1 = current1.next;
      let next2 = current2.next;
  
      current1.next = current2;
      current2.next = next1;
  
      current1 = next1;
      current2 = next2;
    }
  
    return head1;
  }
  
  // Create the first linked list
  const head1 = new Node(5);
  head1.next = new Node(7);
  head1.next.next = new Node(17);
  head1.next.next.next = new Node(13);
  head1.next.next.next.next = new Node(11);
  
  // Create the second linked list
  const head2 = new Node(12);
  head2.next = new Node(10);
  head2.next.next = new Node(2);
  head2.next.next.next = new Node(4);
  head2.next.next.next.next = new Node(6);
  
  // Testing the function
  const mergedHead = mergeAlternate(head1, head2);
  
  // Print the modified first list
  let current = mergedHead;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
  