function pushZerosToEnd(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      if (arr[left] === 0) {
        swap(arr, left, right);
        right--;
      } else {
        left++;
      }
    }
  
    return arr;
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  