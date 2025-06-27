
// Monotonic Stack
// Time: O(n)
// Space: O(1)
var canSeePersonsCount = function(heights) {
    const order = heights.map(v => 0)
    const stack = []
    const top = () => stack[stack.length-1]
    const n = heights.length
    for (let i = 0; i < n; i++) {
        const v = heights[i];
        
        while (v > heights[top()] || i === n-1) {
            let idx = stack.pop()
            order[idx] = (n-1) - v
        }
        stack.push(i)
    }

    return order;
};
console.log(canSeePersonsCount([10,6,8,5,11,9]))
/**
 * 
    
    10,6,11

    [0,1]

    2- 1 = 1

    2 - 0 = 2

    2-2 = 0
 */