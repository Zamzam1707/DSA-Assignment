function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const doubleS = s + s;
    return doubleS.includes(goal);
  }
  
  // Example usage:
  const s = 'abcde';
  const goal = 'cdeab';
  console.log(rotateString(s, goal)); // Output: true
  