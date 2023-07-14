function findDisjoint(nums1, nums2) {
    const distinctNums1 = new Set(nums1);
    const distinctNums2 = new Set(nums2);
    const answer = [[], []];
  
    for (const num of distinctNums1) {
      if (!distinctNums2.has(num)) {
        answer[0].push(num);
      }
    }
  
    for (const num of distinctNums2) {
      if (!distinctNums1.has(num)) {
        answer[1].push(num);
      }
    }
  
    return answer;
  }
  
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  
  console.log(findDisjoint(nums1, nums2));
  // Output: [[1, 3], [4, 6]]
  