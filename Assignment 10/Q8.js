function countConsonants(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let consonantCount = 0;
  
    // Convert the string to lowercase for case-insensitive comparison
    str = str.toLowerCase();
  
    // Iterate through the string and check if each character is a consonant
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i]) && str[i].match(/[a-z]/i)) {
        consonantCount++;
      }
    }
  
    return consonantCount;
  }
  
  // Testing the function
  console.log(countConsonants("abc de"));                    // Output: 3
  console.log(countConsonants("geeksforgeeks portal"));      // Output: 12
  