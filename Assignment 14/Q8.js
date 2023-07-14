class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function removeZeroSumSublists(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    const stack = [];
    let sum = 0;
    let node = dummy;
  
    while (node) {
      sum += node.val;
  
      if (sum === 0) {
        // Remove nodes from the stack
        while (stack.length > 0) {
          const poppedNode = stack.pop();
          poppedNode.next = node.next;
        }
      }
  
      stack.push(node);
      node = node.next;
    }
  
    return dummy.next;
  }
  