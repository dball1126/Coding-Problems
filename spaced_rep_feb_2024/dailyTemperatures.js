/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// Monotonic Stack
// Time and Space: O(n)
var dailyTemperatures = function(temperatures) {
    
    let result = temperatures.map(a => 0), stack = [], n = temperatures.length;
    const top = () => stack[stack.length-1]
    for (let i = 0; i < n; i++) {
        
        while (stack.length && temperatures[top()] < temperatures[i]) {
            let idx = stack.pop();
            result[idx] = i - idx
        }
        stack.push(i)
    }
    return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))// = [1, 1, 4, 2, 1, 1, 0, 0]

