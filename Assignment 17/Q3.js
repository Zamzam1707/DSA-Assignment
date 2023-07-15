function countStudentsUnableToEat(students, sandwiches) {
    const n = students.length;
    let count = 0;
  
    while (count < n) {
      if (students[0] === sandwiches[0]) {
        students.shift(); // Remove the student from the front of the queue
        sandwiches.shift(); // Remove the sandwich from the top of the stack
        count = 0; // Reset the count since a student has eaten
      } else {
        students.push(students.shift()); // Move the student to the end of the queue
        count++; // Increment the count since a student didn't eat
      }
    }
  
    return count;
  }
  
  // Example usage:
  const students1 = [1, 1, 0, 0];
  const sandwiches1 = [0, 1, 0, 1];
  console.log(countStudentsUnableToEat(students1, sandwiches1)); // Output: 0
  
  const students2 = [1, 1, 1, 0, 0, 1];
  const sandwiches2 = [1, 0, 0, 0, 1, 1];
  console.log(countStudentsUnableToEat(students2, sandwiches2)); // Output: 3
  