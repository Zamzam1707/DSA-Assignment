function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sToT.has(s[i]) && sToT.get(s[i]) !== t[i]) {
      return false;
    }
    if (tToS.has(t[i]) && tToS.get(t[i]) !== s[i]) {
      return false;
    }
    sToT.set(s[i], t[i]);
    tToS.set(t[i], s[i]);
  }

  return true;
}

// Example usage:
const s = "egg";
const t = "add";
console.log(isIsomorphic(s, t)); // Output: true
