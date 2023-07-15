class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class DoublyLinkedListNode {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Function to convert a binary tree to a doubly linked list
  function convertToDoublyLinkedList(root) {
    if (root === null) {
      return null;
    }
  
    // Convert the left subtree
    const leftHead = convertToDoublyLinkedList(root.left);
  
    // Create a new node for the current root
    const current = new DoublyLinkedListNode(root.value);
  
    // Connect the left subtree to the current node
    if (leftHead !== null) {
      leftHead.prev = current;
      current.next = leftHead;
    }
  
    // Convert the right subtree
    const rightHead = convertToDoublyLinkedList(root.right);
  
    // Connect the right subtree to the current node
    if (rightHead !== null) {
      rightHead.prev = current;
      current.next = rightHead;
    }
  
    // Return the head of the doubly linked list
    return current;
  }
  
  // Function to traverse a doubly linked list and print its values
  function traverseDoublyLinkedList(head) {
    let current = head;
    const values = [];
  
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
  
    return values;
  }
  
  // Example usage
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(30);
  root.right.right = new TreeNode(35);
  
  console.log("Binary Tree:");
  console.log(root);
  
  const head = convertToDoublyLinkedList(root);
  const values = traverseDoublyLinkedList(head);
  
  console.log("Doubly Linked List:");
  console.log(values.join(" "));
  