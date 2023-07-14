function productOfArray(arr) {
    let product = 1;
  
    // Iterate through the array and multiply each element to the product
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
  
    return product;
  }
  
  // Testing the function
  console.log(productOfArray([1, 2, 3, 4, 5])); // Output: 120
  console.log(productOfArray([1, 6, 3]));       // Output: 18
  