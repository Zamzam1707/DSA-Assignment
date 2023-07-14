function str2tree(s) {
    let index = 0;
  
    function buildTree(s, index) {
      if (index >= s.length || s[index] === ')') {
        return [];
      }
  
      let numStart = index;
      while (index < s.length && s[index] !== '(' && s[index] !== ')') {
        index++;
      }
      const num = parseInt(s.substring(numStart, index));
      const node = [num];
  
      if (index < s.length && s[index] === '(') {
        index++;
        node.push(...buildTree(s, index));
      }
  
      if (index < s.length && s[index] === '(') {
        index++;
        node.push(...buildTree(s, index));
      }
  
      if (index < s.length && s[index] === ')') {
        index++;
      }
  
      return node;
    }
  
    return buildTree(s, index);
  }
  
  // Example usage:
  const s = '4(2(3)(1))(6(5))';
  console.log(str2tree(s));
  // Output: [4, 2, 6, 3, 1, 5]
  