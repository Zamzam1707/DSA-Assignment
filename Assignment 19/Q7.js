function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set();
  
    for (let num of nums2) {
      if (set1.has(num)) {
        set2.add(num);
      }
    }
  
    const intersection = Array.from(set2);
    return intersection;
  }
  