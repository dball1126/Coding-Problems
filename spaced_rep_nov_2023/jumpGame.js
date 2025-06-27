/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Greedy
// Time: O(n)
// Space: O(1)
var canJump = function(nums) {
    let n = nums.length, curr = -1
    for (let i = 0; i < n; i++) {
        curr = Math.max(curr, nums[i])
        if (i + curr >= n-1) return true
        if (curr <= 0) return false
        curr -= 1
    }
    return false;
};

