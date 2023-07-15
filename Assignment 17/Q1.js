function firstUniqueChar(s) {
  const frequencyMap = new Map();

  // Count the frequency of each character
  for (const char of s) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  // Find the first character with a frequency of 1
  for (let i = 0; i < s.length; i++) {
    if (frequencyMap.get(s[i]) === 1) {
      return i; // Return the index of the first non-repeating character
    }
  }

  return -1; // No non-repeating character found
}

// Example usage:
const s1 = "leetcode";
console.log(firstUniqueChar(s1)); // Output: 0

const s2 = "loveleetcode";
console.log(firstUniqueChar(s2)); // Output: 2

const s3 = "aabb";
console.log(firstUniqueChar(s3)); // Output: -1
