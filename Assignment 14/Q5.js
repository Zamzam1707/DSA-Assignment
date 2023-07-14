class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function oddEvenList(head) {
    if (!head || !head.next) {
      return head;
    }
  
    let oddHead = head;
    let evenHead = head.next;
    let odd = oddHead;
    let even = evenHead;
  
    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
  
    odd.next = evenHead;
  
    return oddHead;
  }
  
  // Example usage:
  
  // Create the input linked list
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  
  // Reorder the linked list
  const reorderedHead = oddEvenList(head);
  
  // Print the reordered linked list
  let current = reorderedHead;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  