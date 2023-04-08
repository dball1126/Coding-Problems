// Stack
// Time & Space: O(n)
var largestRectangleArea = function(heights) {
    let maxArea = 0, stack = [-1], len = heights.length

    for (let i = 0; i < len; i++) {
        let curr = heights[i]

        while (heights[stack[stack.length-1]] >= curr && heights[stack[stack.length-1]] !== -1) {
            let height = stack.pop();
            let rWidth = i - height;
            let lWidth = height - stack[stack.length-1]
            maxArea = Math.max(maxArea, (rWidth + lWidth - 1) * heights[height])
        }
        stack.push(i)
    }

    while (stack.length > 1) {
        let height = stack.pop();
        let rWidth = len - height;
        let lWidth = height - stack[stack.length-1]
        maxArea = Math.max(maxArea, (rWidth + lWidth - 1) * heights[height])
    }
    return maxArea
}; console.log(largestRectangleArea([2,1,2])) // = 3
