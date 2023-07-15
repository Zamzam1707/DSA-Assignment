class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  // Create a min-heap using a priority queue
  const pq = new PriorityQueue((a, b) => a.val - b.val);

  // Add the head nodes of all linked lists to the min-heap
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      pq.enqueue(lists[i]);
    }
  }

  // Initialize an empty result linked list and a pointer
  const dummy = new ListNode(0);
  let current = dummy;

  // Merge the linked lists
  while (!pq.isEmpty()) {
    const node = pq.dequeue();
    current.next = node;
    current = current.next;

    if (node.next) {
      pq.enqueue(node.next);
    }
  }

  return dummy.next;
}

// Priority queue implementation
class PriorityQueue {
  constructor(comparator = (a, b) => a - b) {
    this.comparator = comparator;
    this.heap = [];
  }

  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    this.swap(0, this.heap.length - 1);
    const removed = this.heap.pop();
    this.bubbleDown(0);
    return removed;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.comparator(this.heap[index], this.heap[parentIndex]) >= 0) {
        break;
      }

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestChildIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.comparator(this.heap[leftChildIndex], this.heap[smallestChildIndex]) < 0
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.comparator(this.heap[rightChildIndex], this.heap[smallestChildIndex]) < 0
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex === index) {
        break;
      }

      this.swap(index, smallestChildIndex);
      index = smallestChildIndex;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
