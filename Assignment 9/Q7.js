function permuteString(S) {
    const result = []; // Array to store the permutations
    
    // Convert the string to an array for easier swapping
    const chars = S.split("");
  
    // Recursive function to generate permutations
    function generatePermutations(startIndex) {
      if (startIndex === chars.length - 1) {
        // Base case: Reached the last character, add the current permutation to the result
        result.push(chars.join(""));
      } else {
        for (let i = startIndex; i < chars.length; i++) {
          // Swap characters at positions startIndex and i
          [chars[startIndex], chars[i]] = [chars[i], chars[startIndex]];
  
          // Generate permutations for the remaining characters
          generatePermutations(startIndex + 1);
  
          // Swap back the characters to backtrack
          [chars[startIndex], chars[i]] = [chars[i], chars[startIndex]];
        }
      }
    }
  
    // Start generating permutations from index 0
    generatePermutations(0);
  
    return result;
  }
  
  // Testing the function
  console.log(permuteString("ABC")); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
  console.log(permuteString("XY"));  // Output: ["XY", "YX"]
  