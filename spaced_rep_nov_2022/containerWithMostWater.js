// Two pointer
// Time: O(n), Space: O(1)
 var maxArea = function(height) {
    let maxContainer = -Infinity, s = 0, e = height.length-1

    while (s < e) {
        let area = Math.min(height[s], height[e]) * (e - s)
        maxContainer = Math.max(maxContainer, area)
        height[s] <= height[e] ? s++ : e--;
    }
    return maxContainer;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7])) // = 49
