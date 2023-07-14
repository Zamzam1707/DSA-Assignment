function reverseString(S) {
    const stack = [];
    const reversedString = [];
  
    // Push each character of the string into the stack
    for (let i = 0; i < S.length; i++) {
      stack.push(S[i]);
    }
  
    // Pop each character from the stack to construct the reversed string
    while (stack.length > 0) {
      reversedString.push(stack.pop());
    }
  
    // Convert the reversed string array to a string
    return reversedString.join('');
  }
  
  // Example usage:
  const S = 'GeeksforGeeks';
  console.log(reverseString(S)); // Output: skeeGrofskeeG
  