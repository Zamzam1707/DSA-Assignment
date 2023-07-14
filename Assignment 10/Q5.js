function countContiguousSubstrings(S) {
    let count = 0;
  
    // Iterate through the string
    for (let i = 0; i < S.length; i++) {
      // Count substrings starting at the current character
      let j = i;
      while (j < S.length && S[i] === S[j]) {
        count++;
        j++;
      }
    }
  
    return count;
  }
  
  // Testing the function
  console.log(countContiguousSubstrings("ABC"));     // Output: 3
  console.log(countContiguousSubstrings("ABA"));     // Output: 4
  console.log(countContiguousSubstrings("AAAAA"));   // Output: 15
  console.log(countContiguousSubstrings("ABABA"));   // Output: 9
  