function decodeString(s) {
    const stack = [];
  
    for (const char of s) {
      if (char !== ']') {
        stack.push(char);
      } else {
        let substring = '';
        while (stack[stack.length - 1] !== '[') {
          substring = stack.pop() + substring;
        }
        stack.pop();
  
        let repeat = '';
        while (!isNaN(stack[stack.length - 1])) {
          repeat = stack.pop() + repeat;
        }
        repeat = parseInt(repeat);
  
        const repeatedSubstring = substring.repeat(repeat);
        stack.push(...repeatedSubstring);
      }
    }
  
    return stack.join('');
  }
  
  // Example usage:
  const s = '3[a]2[bc]';
  console.log(decodeString(s)); // Output: 'aaabcbc'
  