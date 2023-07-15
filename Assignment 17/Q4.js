class RecentCounter {
    constructor() {
      this.requests = [];
    }
  
    ping(t) {
      this.requests.push(t); // Add the new request timestamp to the queue
  
      // Remove the timestamps that fall outside the time frame of the last 3000 milliseconds
      while (this.requests[0] < t - 3000) {
        this.requests.shift();
      }
  
      return this.requests.length; // Return the number of requests within the time frame
    }
  }
  
  // Example usage:
  const recentCounter = new RecentCounter();
  console.log(recentCounter.ping(1));    // Output: 1
  console.log(recentCounter.ping(100));  // Output: 2
  console.log(recentCounter.ping(3001)); // Output: 3
  console.log(recentCounter.ping(3002)); // Output: 3
  