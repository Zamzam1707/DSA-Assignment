function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const diff = [];
    const indices = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diff.push(s[i]);
        indices.push(i);
      }
  
      if (diff.length > 2) {
        return false;
      }
    }
  
    if (diff.length === 0) {
      const set = new Set(s);
      return set.size < s.length;
    }
  
    if (diff.length === 2) {
      return (
        diff[0] === goal[indices[1]] && diff[1] === goal[indices[0]]
      );
    }
  
    return false;
  }
  
  // Example usage:
  const s = 'ab';
  const goal = 'ba';
  console.log(buddyStrings(s, goal)); // Output: true
  