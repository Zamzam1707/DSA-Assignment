function distributeCandies(candyType) {
    const maxCandies = candyType.length / 2;
    const uniqueCandies = new Set();
  
    for (let candy of candyType) {
      uniqueCandies.add(candy);
      if (uniqueCandies.size === maxCandies) {
        break;
      }
    }
  
    return uniqueCandies.size;
  }
  
  // Example usage
  const candyType = [1, 1, 2, 2, 3, 3];
  const result = distributeCandies(candyType);
  console.log(result); // Output: 3
  