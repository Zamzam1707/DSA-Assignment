function printAllSubsets(set, subset = "", index = 0) {
    if (index === set.length) {
      console.log(subset);
      return;
    }
  
    // Include the current character and generate subsets
    printAllSubsets(set, subset + set[index], index + 1);
  
    // Exclude the current character and generate subsets
    printAllSubsets(set, subset, index + 1);
  }
  
  // Testing the function
  printAllSubsets("abc");
  