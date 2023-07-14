function checkStraightLine(coordinates) {
    const slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
  
    for (let i = 2; i < coordinates.length; i++) {
      const currSlope = (coordinates[i][1] - coordinates[0][1]) / (coordinates[i][0] - coordinates[0][0]);
      if (currSlope !== slope) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
  console.log(checkStraightLine(coordinates)); // Output: true
  