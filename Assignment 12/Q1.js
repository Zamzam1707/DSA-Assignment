function deleteMiddleNode(head) {
  if (!head || !head.next) {
    return head; // No middle node to delete
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next; // Remove the middle node(s)

  return head;
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

// Testing the function
let current = deleteMiddleNode(head);
while (current) {
  console.log(current.data);
  current = current.next;
}
