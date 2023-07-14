function backspaceCompare(s, t) {
    const sArr = [];
    const tArr = [];
  
    for (const c of s) {
      if (c !== '#') {
        sArr.push(c);
      } else if (sArr.length > 0) {
        sArr.pop();
      }
    }
  
    for (const c of t) {
      if (c !== '#') {
        tArr.push(c);
      } else if (tArr.length > 0) {
        tArr.pop();
      }
    }
  
    return sArr.join('') === tArr.join('');
  }
  
  // Example usage:
  const s = 'ab#c';
  const t = 'ad#c';
  console.log(backspaceCompare(s, t)); // Output: true
  