class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function leftShiftLinkedList(head, k) {
    if (!head || k === 0) {
      return head;
    }
  
    let tail = head;
    let length = 1;
  
    // Traverse to find the tail node and the length of the list
    while (tail.next) {
      tail = tail.next;
      length++;
    }
  
    // Normalize k by taking the modulo with the length
    k %= length;
  
    // If k becomes 0, return the head as it is
    if (k === 0) {
      return head;
    }
  
    // Move the tail node to point to the head of the list
    tail.next = head;
  
    // Traverse k-1 nodes from the head to find the new tail node
    let newTail = head;
    for (let i = 0; i < k - 1; i++) {
      newTail = newTail.next;
    }
  
    // Set the new head to be the next node after the new tail
    const newHead = newTail.next;
  
    // Set the next pointer of the new tail node to null
    newTail.next = null;
  
    return newHead;
  }
  
  // Example usage:
  
  // Create the input linked list
  const head = new ListNode(2);
  head.next = new ListNode(4);
  head.next.next = new ListNode(7);
  head.next.next.next = new ListNode(8);
  head.next.next.next.next = new ListNode(9);
  
  // Left-shift the linked list by 3 nodes
  const shiftedHead = leftShiftLinkedList(head, 3);
  
  // Print the shifted linked list
  let current = shiftedHead;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  