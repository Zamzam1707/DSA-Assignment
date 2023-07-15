function findMinArrowShots(points) {
    // Sort the balloons based on their end coordinates in ascending order
    points.sort((a, b) => a[1] - b[1]);
  
    let end = Number.MIN_SAFE_INTEGER;
    let arrows = 0;
  
    for (let point of points) {
      const [xstart, xend] = point;
  
      // If the current balloon cannot be burst by the current arrow
      if (xstart > end) {
        arrows++;
        end = xend;
      }
    }
  
    return arrows;
  }
  
  // Example usage:
  const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
  console.log(findMinArrowShots(points)); // Output: 2
  