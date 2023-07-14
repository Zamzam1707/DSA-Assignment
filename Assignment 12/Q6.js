// Node class definition
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function retainAndDelete(head, M, N) {
    if (!head || M <= 0 || N <= 0) {
      return head; // Invalid input, return the original linked list
    }
  
    let current = head;
    let prev = null;
  
    while (current) {
      // Traverse M nodes
      for (let i = 1; i < M && current; i++) {
        current = current.next;
      }
  
      if (!current) {
        break; // Reached the end of the list
      }
  
      let temp = current.next;
  
      // Delete N nodes
      for (let i = 0; i < N && temp; i++) {
        temp = temp.next;
      }
  
      current.next = temp; // Connect the retained nodes
  
      // Move the pointers to the next set of nodes
      prev = current;
      current = temp;
    }
  
    return head;
  }
  
  // Create the linked list
  const head1 = new Node(1);
  head1.next = new Node(2);
  head1.next.next = new Node(3);
  head1.next.next.next = new Node(4);
  head1.next.next.next.next = new Node(5);
  head1.next.next.next.next.next = new Node(6);
  head1.next.next.next.next.next.next = new Node(7);
  head1.next.next.next.next.next.next.next = new Node(8);
  
  const head2 = new Node(1);
  head2.next = new Node(2);
  head2.next.next = new Node(3);
  head2.next.next.next = new Node(4);
  head2.next.next.next.next = new Node(5);
  head2.next.next.next.next.next = new Node(6);
  head2.next.next.next.next.next.next = new Node(7);
  head2.next.next.next.next.next.next.next = new Node(8);
  head2.next.next.next.next.next.next.next.next = new Node(9);
  head2.next.next.next.next.next.next.next.next.next = new Node(10);
  
  // Testing the function
  const retainedHead1 = retainAndDelete(head1, 2, 2);
  let current1 = retainedHead1;
  while (current1) {
    console.log(current1.data);
    current1 = current1.next;
  }
  
  console.log('------');
  
  const retainedHead2 = retainAndDelete(head2, 3, 2);
  let current2 = retainedHead2;
  while (current2) {
    console.log(current2.data);
    current2 = current2.next;
  }
  