class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function nextLargerNodes(head) {
    const stack = [];
    const answer = [];
    let node = head;
  
    while (node) {
      while (stack.length > 0 && stack[stack.length - 1].val < node.val) {
        const poppedNode = stack.pop();
        answer[poppedNode.index] = node.val;
      }
  
      stack.push({ val: node.val, index: answer.length });
      answer.push(0);
      node = node.next;
    }
  
    return answer.reverse();
  }
  