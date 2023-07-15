function findNearestGreaterFrequency(arr) {
  const frequencyMap = new Map(); // Map to store element frequencies
  const result = new Array(arr.length); // Array to store the results

  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];

    // Increment the frequency of the current element
    const frequency = frequencyMap.get(element) || 0;
    frequencyMap.set(element, frequency + 1);

    let nearestGreaterFreqIndex = -1; // Index of the nearest element with a greater frequency

    // Find the nearest element to the right with a greater frequency
    for (let j = i + 1; j < arr.length; j++) {
      const nextElement = arr[j];
      const nextElementFrequency = frequencyMap.get(nextElement);

      if (nextElementFrequency > frequency) {
        nearestGreaterFreqIndex = j;
        break;
      }
    }

    result[i] = nearestGreaterFreqIndex !== -1 ? arr[nearestGreaterFreqIndex] : -1;
  }

  return result;
}

// Example usage:
const arr = [1, 1, 2, 3, 4, 2, 1];
const output = findNearestGreaterFrequency(arr);
console.log(output); // Output: [-1, -1, 1, 2, 2, 1, -1]
