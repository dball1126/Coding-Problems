
var canJump = function(nums) {
    if (nums.length === 1) return true;
    if (nums[0] === 0) return false;

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i-1]-1, nums[i])

        if (nums[i]+i >= nums.length-1) return true;
        if (nums[i] === 0) return false;
    }

    return false;
};

console.log(canJump([2,0,0]))
