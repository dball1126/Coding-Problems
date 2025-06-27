/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// Monotonic stack
// Time & Space: O(n)
var dailyTemperatures = function(temperatures) {
    const n  = temperatures.length;
    let result = temperatures.map(a => a), stack = [n-1]
    result[n-1] = 0

    for (let i = n-2; i >= 0; i--) {
       while (stack.length && temperatures[stack[stack.length-1]] <= temperatures[i]) {
        stack.pop()
       }
       if (!stack.length) {
        result[i] = 0
       } else {
       result[i] = stack[stack.length-1] - i
       }
       stack.push(i)
    }
    return result
};
console.log(dailyTemperatures(temperatures = [73,74,75,71,69,72,76,73])) // = [1, 1, 4, 2, 1, 1, 0, 0]



