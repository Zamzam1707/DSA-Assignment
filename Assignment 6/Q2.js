function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
  
    let left = 0;
    let right = m * n - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const row = Math.floor(mid / n);
      const col = mid % n;
  
      if (matrix[row][col] === target) {
        return true;
      } else if (matrix[row][col] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return false;
  }
  
  // Example usage:
  const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
  const target = 3;
  
  console.log(searchMatrix(matrix, target)); // Output: true
  