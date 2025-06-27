/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
function splitMessage(s, limit) {
    let cur = 0;
    let k = 0;
    let i = 0;
  
    // Loop until the condition is met (similar to Python logic)
    while (3 + 2 * String(k).length < limit && cur + s.length + (3 + String(k).length) * k > limit * k) {
      k++;
      cur += String(k).length;
    }
  
    const res = [];
  
    // Check if it's possible to split into messages
    if (3 + 2 * String(k).length < limit) {
      for (let j = 1; j <= k; j++) {
        const l = limit - (String(j).length + 3 + String(k).length);
        res.push(`${s.slice(i, i + l)}<${j}/${k}>`); // Use string template literals
        i += l;
      }
    }
  
    return res;
  }

  console.log(splitMessage( message = "this is really a very awesome message", limit = 9))