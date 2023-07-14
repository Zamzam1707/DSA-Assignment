function arraysIntersection(arr1, arr2, arr3) {
  const result = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push(arr1[i]);
      i++;
      j++;
      k++;
    } else {
      const minVal = Math.min(arr1[i], arr2[j], arr3[k]);
      if (arr1[i] === minVal) i++;
      if (arr2[j] === minVal) j++;
      if (arr3[k] === minVal) k++;
    }
  }

  return result;
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];
const result = arraysIntersection(arr1, arr2, arr3);
console.log(result); // Output: [1, 5]
