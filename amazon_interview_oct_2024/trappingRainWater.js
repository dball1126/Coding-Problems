/**
 * @param {number[]} height
 * @return {number}
 */

// Monotonic Stack
// Time and Space: O(n)
var trap = function(height) {
    let stack = [], water = 0
    const top = () => stack[stack.length-1]

    for (let i = 0; i < height.length; i++) {
        const v = height[i]

        while (stack.length && height[top()] <= v) {
            let mid = stack.pop();
            if (!stack.length) continue;
            let w = i - top() - 1
            let h = Math.min(height[top()], v) - height[mid]

            water += (h * w)
        }
        stack.push(i);
    }
    return water;
};
console.log(trap([4,2,0,3,2,5])) // = 9


