/**
 * @param {number[]} nums
 * @return {number}
 */
// Bottom-up Dynamic Programming
// Time: O(n)
// Space: O(1)
var maxSubArray = function(nums) {
    if (!nums.length) return 0;
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        nums[i]  = Math.max(nums[i-1] + nums[i], nums[i])
        max = Math.max(max, nums[i])
    }
    return max;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))// = 6



