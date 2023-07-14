function towerOfHanoi(n, source, destination, intermediate) {
    if (n === 1) {
      // Base case: If there is only one disc, move it from the source rod to the destination rod
      console.log("Move disk 1 from rod " + source + " to rod " + destination);
      return 1;
    } else {
      // Recursive case:
      // Move (n-1) discs from the source rod to the intermediate rod using the destination rod as the intermediate rod
      const step1 = towerOfHanoi(n - 1, source, intermediate, destination);
  
      // Move the remaining 1 disc from the source rod to the destination rod
      console.log("Move disk " + n + " from rod " + source + " to rod " + destination);
  
      // Move (n-1) discs from the intermediate rod to the destination rod using the source rod as the intermediate rod
      const step2 = towerOfHanoi(n - 1, intermediate, destination, source);
  
      // Return the total number of steps
      return step1 + 1 + step2;
    }
  }
  
  // Testing the function
  const n = 2;
  const sourceRod = 1;
  const destinationRod = 3;
  const intermediateRod = 2;
  
  console.log("Total moves:", towerOfHanoi(n, sourceRod, destinationRod, intermediateRod));
  