function alternatePositiveNegative(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      if (arr[left] > 0 && arr[right] < 0) {
        left++;
        right--;
      } else if (arr[left] > 0 && arr[right] > 0) {
        while (right > left && arr[right] > 0) {
          right--;
        }
      } else if (arr[left] < 0 && arr[right] > 0) {
        swap(arr, left, right);
        left++;
        right--;
      } else if (arr[left] < 0 && arr[right] < 0) {
        while (left < right && arr[left] < 0) {
          left++;
        }
      }
    }
  
    return arr;
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  