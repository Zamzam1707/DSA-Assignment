function evaluatePostfixExpression(S) {
    const stack = [];
  
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
  
      // If the character is a digit, convert it to a number and push it onto the stack
      if (!isNaN(char)) {
        stack.push(Number(char));
      } else {
        // If the character is an operator, pop the top two elements from the stack,
        // perform the corresponding operation, and push the result back onto the stack
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        switch (char) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(operand1 / operand2);
            break;
        }
      }
    }
  
    // The final result will be the only element remaining in the stack
    return stack.pop();
  }
  
  // Example usage:
  const S1 = '231*+9-';
  console.log(evaluatePostfixExpression(S1)); // Output: -4
  
  const S2 = '123+*8-';
  console.log(evaluatePostfixExpression(S2)); // Output: -3
  