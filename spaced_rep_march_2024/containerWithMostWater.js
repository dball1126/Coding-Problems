/**
 * @param {number[]} height
 * @return {number}
 */
// Two-Pointer
// Time: O(n)
// Space: O(1)
var maxArea = function(height) {
    
    let s = 0, e = height.length-1, max = -Infinity

    while (s < e) {
        let maxHeight = Math.min(height[s], height[e])

        max = Math.max(max,( maxHeight * (e-s)))

        height[s] <= height[e] ? s++ : e--
    }
    
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // = 49

// [1,8,6,2,5,4,8,3,7]

// 0 8

// 8 1    8 - 1
