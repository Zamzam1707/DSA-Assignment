function compress(chars) {
    let write = 0;
    let count = 1;
  
    for (let read = 1; read <= chars.length; read++) {
      if (chars[read] === chars[read - 1]) {
        count++;
      } else {
        chars[write] = chars[read - 1];
        write++;
  
        if (count > 1) {
          const countStr = count.toString();
          for (let i = 0; i < countStr.length; i++) {
            chars[write] = countStr[i];
            write++;
          }
        }
  
        count = 1;
      }
    }
  
    return write;
  }
  
  // Example usage:
  const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
  console.log(compress(chars)); // Output: 6
  console.log(chars.slice(0, 6)); // Output: ['a', '2', 'b', '2', 'c', '3']
  