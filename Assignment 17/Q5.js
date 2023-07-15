function findWinner(n, k) {
    const friends = Array.from({ length: n }, (_, i) => i + 1); // Create an array representing the circle of friends
  
    let start = 0; // Starting position in the circle
  
    while (friends.length > 1) {
      const count = (start + k - 1) % friends.length; // Calculate the index of the friend to be eliminated
      friends.splice(count, 1); // Remove the friend from the circle
      start = count % friends.length; // Adjust the starting position for the next round
    }
  
    return friends[0]; // Return the winner of the game
  }
  
  // Example usage:
  console.log(findWinner(5, 2)); // Output: 3
  console.log(findWinner(6, 5)); // Output: 1
  