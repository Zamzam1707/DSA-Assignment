function arrangeCoins(n) {
    let left = 1;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const totalCoins = (mid * (mid + 1)) / 2;
  
      if (totalCoins > n) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return right;
  }
  
  // Example usage
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result); // Output: 2
  