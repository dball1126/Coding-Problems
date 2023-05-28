
// Greedy algorithm
// Time: O(n)
// Space: O(1)
var canJump = function(nums) {
    if (nums.length <= 1) return true;
    let jump = nums[0];
    for (let i = 1; i < nums.length; i++) {
        jump--;
        if (jump < 0) return false;
        jump = Math.max(jump, nums[i]);
        if (jump + i >= nums.length-1) {
            return true;
        }
    }
    return false;
};
console.log(canJump(nums = [2,3,1,1,4])) // = true
