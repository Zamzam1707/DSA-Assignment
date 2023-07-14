function calculateStringLength(str) {
    // Base case: If the string is empty, return 0
    if (str === "") {
      return 0;
    }
  
    // Recursive case: Remove the first character and recursively calculate the length of the remaining string
    return 1 + calculateStringLength(str.slice(1));
  }
  
  // Testing the function
  console.log(calculateStringLength("Hello")); // Output: 5
  console.log(calculateStringLength(""));      // Output: 0
  