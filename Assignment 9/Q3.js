function factorial(N) {
    // Initialize the factorial to 1
    let fact = 1;
  
    // Multiply all numbers from N down to 1
    for (let i = N; i >= 1; i--) {
      fact *= i;
    }
  
    return fact;
  }
  
  // Testing the function
  console.log(factorial(5)); // Output: 120
  console.log(factorial(4)); // Output: 24
  