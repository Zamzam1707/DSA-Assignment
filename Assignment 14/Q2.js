// Node class definition for linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Function to add 1 to the number represented by the linked list
  function addOne(head) {
    let current = head;
    let carry = 1;
  
    // Traverse the linked list in reverse order
    while (current) {
      // Add the carry to the current digit
      let sum = current.data + carry;
  
      // Update the current digit and carry
      current.data = sum % 10;
      carry = Math.floor(sum / 10);
  
      // Move to the next node
      current = current.next;
    }
  
    // If there is still a carry, create a new node and append it to the list
    if (carry) {
      let newNode = new Node(carry);
      current.next = newNode;
    }
  
    return head;
  }
  
  // Create the linked list representing the number 456
  const head = new Node(4);
  const node2 = new Node(5);
  const node3 = new Node(6);
  
  head.next = node2;
  node2.next = node3;
  
  // Add 1 to the number represented by the linked list
  const newHead = addOne(head);
  
  // Print the updated number
  let current = newHead;
  let number = "";
  while (current) {
    number += current.data;
    current = current.next;
  }
  
  console.log(number);
  