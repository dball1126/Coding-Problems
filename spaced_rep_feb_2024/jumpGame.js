/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Greedy
// Time: O(n)
// Space: O(1)
var canJump = function(nums) {
    if (nums.length <= 1) return true;
    let n = nums.length, curr = nums[0];

    for (let i = 0; i < n; i++) {
        if (curr < 0) return false;

        curr = Math.max(curr, nums[i])
        if ((curr + i) >= n-1) return true;
        curr -= 1
    }
    return false;
};
console.log(canJump(nums = [2,3,1,1,4])) // true