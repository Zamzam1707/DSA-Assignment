// Node class definition for linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to detect and remove a loop from the linked list
function removeLoop(head) {
  // Check if the list is empty or has only one node
  if (!head || !head.next) {
    return head;
  }

  // Initialize two pointers: slow and fast
  let slow = head;
  let fast = head;

  // Move the fast pointer by two steps and the slow pointer by one step
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // If the slow and fast pointers meet, a loop is present
    if (slow === fast) {
      break;
    }
  }

  // If there is no loop, return the list as is
  if (slow !== fast) {
    return head;
  }

  // Move the slow pointer to the head
  slow = head;

  // Find the node where the loop starts
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the loop by setting the next pointer of the last node to null
  fast.next = null;

  return head;
}

// Create the linked list
const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

head.next = node2;
node2.next = node3;
node3.next = node4;

// Create a loop by connecting the last node to the second node
node4.next = node2;

// Remove the loop from the linked list
const newHead = removeLoop(head);

// Print the updated list (loop removed)
let current = newHead;
while (current) {
  console.log(current.data);
  current = current.next;
}
