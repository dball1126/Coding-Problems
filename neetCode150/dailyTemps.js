
// Stack
// Time and Space: O(n)
var dailyTemperatures = function(temps) {
    let stack = []
    let result = temps.map(a => 0)
    for (let i = 0; i < temps.length; i++) {
        while (stack.length && temps[stack[stack.length-1]] < temps[i]) {
            let idx = stack.pop()
            result[idx] = i - idx
        }
        stack.push(i)
    }
    return result 
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))//=[1,1,4,2,1,1,0,0]
