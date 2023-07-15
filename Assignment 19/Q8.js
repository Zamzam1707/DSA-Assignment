function intersection(nums1, nums2) {
    const freqMap1 = new Map();
    const result = [];
  
    for (let num of nums1) {
      freqMap1.set(num, (freqMap1.get(num) || 0) + 1);
    }
  
    for (let num of nums2) {
      if (freqMap1.has(num) && freqMap1.get(num) > 0) {
        result.push(num);
        freqMap1.set(num, freqMap1.get(num) - 1);
      }
    }
  
    return result;
  }
  