function lastRemaining(n) {
    let leftToRight = true; // Flag to indicate the current direction
    let remaining = n; // Variable to store the count of remaining numbers
    let step = 1; // Variable to store the step size
  
    let head = 1; // Variable to store the current head of the list
  
    while (remaining > 1) {
      // If moving from left to right or moving from right to left with an odd count of remaining numbers,
      // update the head position by adding the step size
      if (leftToRight || remaining % 2 === 1) {
        head += step;
      }
  
      // Update the remaining count by halving it
      remaining = Math.floor(remaining / 2);
  
      // Double the step size for the next iteration
      step *= 2;
  
      // Toggle the direction flag
      leftToRight = !leftToRight;
    }
  
    return head;
  }
  
  // Testing the function
  console.log(lastRemaining(9)); // Output: 6
  