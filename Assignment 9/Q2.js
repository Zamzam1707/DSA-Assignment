function sumOfFirstNNumbers(n) {
    // Calculate the sum using the formula for the sum of an arithmetic series
    const sum = (n * (n + 1)) / 2;
    return sum;
  }
  
  // Testing the function
  console.log(sumOfFirstNNumbers(3)); // Output: 6
  console.log(sumOfFirstNNumbers(5)); // Output: 15
  