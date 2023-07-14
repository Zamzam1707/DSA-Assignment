function reconstructPermutation(s) {
  const n = s.length;
  const perm = [];
  let low = 0;
  let high = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      perm.push(low);
      low++;
    } else {
      perm.push(high);
      high--;
    }
  }

  perm.push(low); // Add the last remaining element

  return perm;
}

const s = "IDID";

console.log(reconstructPermutation(s));
// Output: [0, 4, 1, 3, 2]
