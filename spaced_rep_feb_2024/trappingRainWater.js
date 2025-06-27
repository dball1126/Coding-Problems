/**
 * @param {number[]} height
 * @return {number}
 */

// Monotonic Stack
// Time and Space: O(n)
/**
 * @param {number[]} height
 * @return {number}
*/
var trap = function(heights) {
    let result = 0, stack = [], i = 0, n = heights.length
    const top = () => stack[stack.length-1]
    while (i < n) {

        if (stack.length && heights[top()] <= heights[i]) {
            let middle = stack.pop()
            if (!stack.length) continue;
            let minHeight = Math.min(heights[top()], heights[i]) - heights[middle]

            result += ((i - top() - 1) * minHeight )
        } else {
            stack.push(i);
            i++;
        }
    }
    
    return result;
};
console.log(trap(height = [3,2,1,2,3]))// = 4


// [0,1

// middle = 2

// min = 1                  3 - 1 - 1               1

// 1 * 1 = 1


// [0,1,3]
// middle = 2

// min = 2
// min = 2 - 2 = 0           
// 0 * (4 - 3 - 1 )           = 0

// middle = 1

// min = 3 - 2      = 1

// 4 - 0 - 1 = 3               3 * 1 = 2