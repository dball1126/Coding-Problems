/**
 * @param {number[]} height
 * @return {number}
 */
// Two-Pointer
// Time: O(n), Space: O(1)
var maxArea = function(height) {
    let n = height.length, max = 0;
    let s = 0, e = n-1
    while (s < e) {
        let v = Math.min(height[s],height[e]) * (e-s)
        max = Math.max(max, v)
        if (height[s] <= height[e]) {
            s++
        } else {
            e--
        }
    }
    return max
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))//= 49

