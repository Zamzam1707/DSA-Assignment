function printAllPermutations(str, start = 0, result = []) {
    if (start === str.length - 1) {
      // Base case: Reached the last character, add the current permutation to the result
      result.push(str);
    } else {
      for (let i = start; i < str.length; i++) {
        // Swap characters at positions start and i
        str = swapCharacters(str, start, i);
  
        // Generate permutations for the remaining characters
        printAllPermutations(str, start + 1, result);
  
        // Restore the original order by swapping back the characters
        str = swapCharacters(str, start, i);
      }
    }
  
    // Return the array of permutations
    return result;
  }
  
  // Helper function to swap characters in a string
  function swapCharacters(str, i, j) {
    const charArray = str.split("");
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    return charArray.join("");
  }
  
  // Testing the function
  console.log(printAllPermutations("cd"));  // Output: ["cd", "dc"]
  console.log(printAllPermutations("abb")); // Output: ["abb", "bab", "bba", "abb", "bab", "bba"]
  