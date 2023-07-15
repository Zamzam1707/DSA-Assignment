class DataStream {
    constructor(value, k) {
      this.value = value;
      this.k = k;
      this.buffer = new Array(k).fill(null);
      this.index = 0;
    }
  
    consec(num) {
      this.buffer[this.index] = num;
      this.index = (this.index + 1) % this.k;
      
      if (this.buffer.every(val => val === this.value)) {
        return true;
      }
      
      return false;
    }
  }
  
  // Example usage:
  const dataStream = new DataStream(4, 3);
  console.log(dataStream.consec(4)); // Output: false
  console.log(dataStream.consec(4)); // Output: false
  console.log(dataStream.consec(4)); // Output: true
  console.log(dataStream.consec(3)); // Output: false
  