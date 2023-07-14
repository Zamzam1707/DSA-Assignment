// Definition for a Node.
class Node {
    constructor(val, next = null, random = null) {
      this.val = val;
      this.next = next;
      this.random = random;
    }
  }
  
  function copyRandomList(head) {
    if (!head) return null;
  
    // Create a hash map to store the mapping between original and copied nodes
    const map = new Map();
  
    // Create a new copy of each node and store the mapping in the hash map
    let current = head;
    while (current) {
      map.set(current, new Node(current.val));
      current = current.next;
    }
  
    // Set the next and random pointers of the copied nodes based on the mapping
    current = head;
    while (current) {
      const copiedNode = map.get(current);
      copiedNode.next = map.get(current.next) || null;
      copiedNode.random = map.get(current.random) || null;
      current = current.next;
    }
  
    // Return the head of the copied linked list
    return map.get(head);
  }
  
  // Create the original linked list with random pointers
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  
  head.random = head.next.next; // Random pointer of 1 points to 3
  head.next.random = head; // Random pointer of 2 points to 1
  head.next.next.random = head.next.next.next; // Random pointer of 3 points to 4
  head.next.next.next.random = head.next; // Random pointer of 4 points to 2
  
  // Copy the linked list
  const copiedHead = copyRandomList(head);
  
  // Print the values of the copied linked list with random pointers
  let current = copiedHead;
  while (current) {
    const randomVal = current.random ? current.random.val : 'null';
    console.log(current.val + ' (Random: ' + randomVal + ')');
    current = current.next;
  }
  