
// Monotonic Stack
// Time: O(n)
// Space: O(n)
function canSeePersonsCount(heights) {
  let n = heights.length, result = heights.map(a => 0), stack = []
  const top = () => stack[stack.length-1]

  for (let i = 0; i < n; i++) {
    
      while (stack.length && heights[top()] <= heights[i]) {
        let idx = stack.pop()
        result[idx]++
      }
      if (stack.length) {
        result[top()]++
      }
      stack.push(i)
  }

  return result
};
console.log(canSeePersonsCount([5,1,2,3,10])) // = [4,1,1,1,0]

/** [3,1,2,1,0,0]
 *  
    [10,6,8,5,11,9]

    [4]  5 <---
 */