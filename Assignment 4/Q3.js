function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transpose = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    transpose.push(newRow);
  }

  return transpose;
}

// Example usage
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result = transpose(matrix);
console.log(result); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
