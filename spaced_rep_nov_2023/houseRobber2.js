/**
 * @param {number[]} nums
 * @return {number}
 */

// Dynamic Programming
// Time : O(n) + O(n) = O(n)
// Space: O(1)
var rob = function(nums) {
    let prev = nums[1] || 0, prevprev = nums[0] || 0, n = nums.length, max = 0;
    
    for (let i = 2; i < n-1; i++) {
        let newPrevPrev = Math.max(prev, prevprev)
        let newPrev = prevprev + nums[i]
        prev = newPrev
        prevprev = newPrevPrev
    }
    max = Math.max(prev, prevprev)
    prev = nums[2] || 0, prevprev = nums[1] || 0
    for (let i = 3; i < n; i++) {
        let newPrevPrev = Math.max(prev, prevprev)
        let newPrev = prevprev + nums[i]
        prev = newPrev
        prevprev = newPrevPrev
    }
    return Math.max(max, prev, prevprev)
};

console.log(rob(nums = [1,2,3]))//= 3

