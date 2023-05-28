

var maxSubArray = function(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        max = Math.max(max, nums[i])
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))