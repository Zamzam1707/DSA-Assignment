function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => b - a); // Sort the deck in descending order
  
    const queue = [];
    queue.push(deck[0]); // Start with the top card of the deck
  
    for (let i = 1; i < deck.length; i++) {
      queue.unshift(queue.pop()); // Move the last card to the front of the queue
      queue.unshift(deck[i]); // Insert the next card from the deck at the front of the queue
    }
  
    return queue;
  }
  
  // Example usage:
  const deck1 = [17, 13, 11, 2, 3, 5, 7];
  console.log(deckRevealedIncreasing(deck1)); // Output: [2, 13, 3, 11, 5, 17, 7]
  
  const deck2 = [1, 1000];
  console.log(deckRevealedIncreasing(deck2)); // Output: [1, 1000]
  