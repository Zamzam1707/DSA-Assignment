function multiply(mat1, mat2) {
    const m = mat1.length;
    const n = mat2[0].length;
    const k = mat2.length;
  
    const result = new Array(m);
    for (let i = 0; i < m; i++) {
      result[i] = new Array(n).fill(0);
    }
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let x = 0; x < k; x++) {
          sum += mat1[i][x] * mat2[x][j];
        }
        result[i][j] = sum;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  console.log(multiply(mat1, mat2));
  // Output: [[7, 0, 0], [-7, 0, 3]]
  