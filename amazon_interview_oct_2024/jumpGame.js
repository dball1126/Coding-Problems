/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Greedy
// Time: O(n)
// Space: O(1)
var canJump = function(nums) {
    let n = nums.length
    let prev = nums[0]
    if (prev >= n-1) return true;
    for (let i = 1; i < n; i++) {
        if (prev === 0) return false;
        let v = nums[i]
        prev = Math.max(prev-1, v)
        if (i + prev >= n-1) return true;
    }
    
    return false;
};
console.log(canJump( [0,1]))