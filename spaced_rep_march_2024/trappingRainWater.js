/**
 * @param {number[]} height
 * @return {number}
 */

// Monotonic Stack
// Time: O(n)...at most 2 iterations of n
// Space: O(n)...for the stack
var trap = function(height) {
    
    let stack = [], max = 0
    const top = () => stack[stack.length-1]

    for (let i = 0; i < height.length; i++) {

        while (stack.length && height[i] >= height[top()]) {
            let mid = stack.pop();

            if (stack.length)  {
                let h = (Math.min(height[top()], height[i]) - height[mid])
                let w =  (i - top() - 1)
                max += h * w
            }
        }
        stack.push(i)
    }

    return max;
};
console.log(trap([4,2,0,3,2,5])) // = 9

