function findNthTerm(a, d, N) {
    // Calculate the Nth term of the AP series using the formula
    const nthTerm = a + (N - 1) * d;
    return nthTerm;
  }
  
  // Testing the function
  console.log(findNthTerm(2, 1, 5));  // Output: 6
  console.log(findNthTerm(5, 2, 10)); // Output: 23
  