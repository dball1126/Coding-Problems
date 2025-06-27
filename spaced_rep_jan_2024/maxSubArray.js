
// Time: O(n)
// Space: O(1)
var maxSubArray = function(nums) {
    let curr = nums[0], max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i], curr + nums[i], curr)
        curr = nums[i] > (nums[i] + curr) ? nums[i] : nums[i] + curr
    }
    return max
};
console.log(maxSubArray( [5,4,-1,7,8]))