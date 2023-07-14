// Node class definition
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createNewList(list1, list2) {
  if (!list1 || !list2) {
    return null; // If any list is empty, return null
  }

  let head = null;
  let tail = null;

  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    let greaterValue;

    if (current1.data > current2.data) {
      greaterValue = current1.data;
      current1 = current1.next;
    } else {
      greaterValue = current2.data;
      current2 = current2.next;
    }

    const newNode = new Node(greaterValue);

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  return head;
}

// Create the first linked list
const list1 = new Node(5);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = new Node(8);

// Create the second linked list
const list2 = new Node(1);
list2.next = new Node(7);
list2.next.next = new Node(4);
list2.next.next.next = new Node(5);

// Create the new linked list
const newList = createNewList(list1, list2);

// Print the new linked list
let current = newList;
while (current) {
  console.log(current.data);
  current = current.next;
}
