function findCompleteRows(n) {
    let k = 0; // Number of complete rows
    let i = 1; // Current row number
    let sum = 0; // Running sum of coins
  
    while (sum + i <= n) {
      k++;
      sum += i;
      i++;
    }
  
    return k;
  }
  
  console.log(findCompleteRows(5)); // Output: 2
  