function isPowerOfTwo(n) {
  // Check if n is greater than 0 and has only one bit set to 1
  return n > 0 && (n & (n - 1)) === 0;
}

// Testing the function
console.log(isPowerOfTwo(1));  // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3));  // Output: false
