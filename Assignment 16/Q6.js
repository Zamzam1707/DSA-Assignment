function countRemainingWords(sequence) {
    const stack = [];
  
    for (const word of sequence) {
      if (stack.length > 0 && stack[stack.length - 1] === word) {
        stack.pop(); // Destroy the current word and the top of the stack
      } else {
        stack.push(word); // Push the current word onto the stack
      }
    }
  
    return stack.length; // Return the number of words left in the sequence
  }
  
  // Example usage:
  const sequence1 = ["ab", "aa", "aa", "bcd", "ab"];
  console.log(countRemainingWords(sequence1)); // Output: 3
  
  const sequence2 = ["tom", "jerry", "jerry", "tom"];
  console.log(countRemainingWords(sequence2)); // Output: 0
  