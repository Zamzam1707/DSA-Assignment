function addStrings(num1, num2) {
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let carry = 0;
    let result = '';
  
    while (p1 >= 0 || p2 >= 0 || carry !== 0) {
      const x = p1 >= 0 ? parseInt(num1[p1]) : 0;
      const y = p2 >= 0 ? parseInt(num2[p2]) : 0;
      const sum = x + y + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
      p1--;
      p2--;
    }
  
    return result;
  }
  
  // Example usage:
  const num1 = '11';
  const num2 = '123';
  console.log(addStrings(num1, num2)); // Output: "134"
  