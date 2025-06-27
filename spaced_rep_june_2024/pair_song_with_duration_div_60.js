function numPairsDivisibleBy60(time) {
    const remainders = new Array(60).fill(0); // Initialize remainders array with zeros
    let count = 0;
  
    for (const t of time) {
      const complement = (60 - t % 60) % 60; // Calculate complement for divisibility by 60
  
      // Check if a complement exists (meaning a previous element left a remainder)
      if (remainders[complement] > 0) {
        count += remainders[complement];
      }
  
      // Update remainders for current element's modulo 60 value
      remainders[t % 60]++;
    }
  
    return count;
  }
  console.log(numPairsDivisibleBy60( [30,20,150,100,40]))
