// Node class definition for linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.bottom = null;
    }
  }
  
  // Function to merge two sorted linked lists
  function mergeLists(list1, list2) {
    // Base cases
    if (!list1) return list2;
    if (!list2) return list1;
  
    // Compare the data of the nodes
    if (list1.data < list2.data) {
      list1.bottom = mergeLists(list1.bottom, list2);
      return list1;
    } else {
      list2.bottom = mergeLists(list1, list2.bottom);
      return list2;
    }
  }
  
  // Function to flatten the linked list
  function flattenLinkedList(head) {
    // Base case
    if (!head || !head.next) return head;
  
    // Recursively flatten the next list
    head.next = flattenLinkedList(head.next);
  
    // Merge the current list with the flattened next list
    head = mergeLists(head, head.next);
  
    // Return the merged list
    return head;
  }
  
  // Create the linked list with sub-linked lists
  const head = new Node(5);
  head.bottom = new Node(7);
  head.bottom.bottom = new Node(8);
  head.bottom.bottom.bottom = new Node(30);
  
  head.next = new Node(10);
  head.next.bottom = new Node(20);
  
  head.next.next = new Node(19);
  head.next.next.bottom = new Node(22);
  head.next.next.bottom.bottom = new Node(50);
  
  head.next.next.next = new Node(28);
  head.next.next.next.bottom = new Node(35);
  head.next.next.next.bottom.bottom = new Node(40);
  head.next.next.next.bottom.bottom.bottom = new Node(45);
  
  // Flatten the linked list
  const flattenedHead = flattenLinkedList(head);
  
  // Print the flattened list
  let current = flattenedHead;
  let result = '';
  while (current) {
    result += current.data + '-> ';
    current = current.bottom;
  }
  console.log(result);
  