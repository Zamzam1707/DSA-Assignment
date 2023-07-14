function canPlaceFlowers(flowerbed, n) {
    let count = 0;
  
    for (let i = 0; i < flowerbed.length; i++) {
      if (
        flowerbed[i] === 0 &&
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
      ) {
        count++;
        flowerbed[i] = 1; // Mark the current plot as planted
      }
  
      if (count >= n) {
        return true;
      }
    }
  
    return false;
  }
  
  // Example usage
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  const result = canPlaceFlowers(flowerbed, n);
  console.log(result); // Output: true
  