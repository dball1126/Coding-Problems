/**
 * @param {number[]} heights
 * @return {number[]}
 */
// Stack
// TIme: O(n)
// Space: O(1)...if we don't count the output array
var findBuildings = function(heights) {
    let stack = []
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length-1]] <= heights[i]) {
            stack.pop();
        }
        stack.push(i)
    }
    return stack;
};
console.log(findBuildings([4,2,3,1]))