function generateMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push(new Array(n));
    }
  
    let num = 1;
    let rowStart = 0,
      rowEnd = n - 1;
    let colStart = 0,
      colEnd = n - 1;
  
    while (num <= n * n) {
      // Traverse right
      for (let i = colStart; i <= colEnd; i++) {
        matrix[rowStart][i] = num++;
      }
      rowStart++;
  
      // Traverse down
      for (let i = rowStart; i <= rowEnd; i++) {
        matrix[i][colEnd] = num++;
      }
      colEnd--;
  
      // Traverse left
      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = num++;
      }
      rowEnd--;
  
      // Traverse up
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = num++;
      }
      colStart++;
    }
  
    return matrix;
  }
  
  // Example usage:
  const n = 3;
  console.log(generateMatrix(n));
  // Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
  