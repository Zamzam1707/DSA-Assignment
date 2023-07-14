// Node class definition
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) {
      return true; // Empty list or single node list is considered a palindrome
    }
  
    // Find the middle node using the slow and fast pointers
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half of the list
    let prev = null;
    let curr = slow;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  
    // Compare the reversed second half with the first half
    let first = head;
    let second = prev;
    while (second) {
      if (first.data !== second.data) {
        return false; // Not a palindrome
      }
      first = first.next;
      second = second.next;
    }
  
    return true; // Palindrome
  }
  
  // Create the linked list
  const head1 = new Node('R');
  head1.next = new Node('A');
  head1.next.next = new Node('D');
  head1.next.next.next = new Node('A');
  head1.next.next.next.next = new Node('R');
  
  const head2 = new Node('C');
  head2.next = new Node('O');
  head2.next.next = new Node('D');
  head2.next.next.next = new Node('E');
  
  // Testing the function
  console.log(isPalindrome(head1)); // Output: true
  console.log(isPalindrome(head2)); // Output: false
  