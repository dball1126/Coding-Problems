/**
 * @param {number[]} heights
 * @return {number[]}
 */
// Stack
// Time and Space: O(n)
var findBuildings = function(heights) {
    const n = heights.length;

    const stack = []
    const top = () => stack[stack.length-1]

    for (let i = 0; i < n; i++) {
        while (stack.length && heights[top()] <= heights[i]) {
            stack.pop()
        }
        stack.push(i)
    }
    return stack;
};

console.log(findBuildings([4,2,3,1]))

/**
 * [0, 2, 3]
 * 
 */