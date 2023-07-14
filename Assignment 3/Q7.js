function findMissingRanges(nums, lower, upper) {
  const result = [];
  let start = lower;

  for (let num of nums) {
    if (num === start + 1) {
      start++;
    } else if (num > start + 1) {
      result.push([start + 1, num - 1]);
      start = num;
    }
  }

  if (start < upper) {
    result.push([start + 1, upper]);
  }

  return result;
}

// Example usage
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
const result = findMissingRanges(nums, lower, upper);
console.log(result); // Output: [[2, 2], [4, 49], [51, 74], [76, 99]]
