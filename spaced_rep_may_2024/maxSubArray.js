/**
 * @param {number[]} nums
 * @return {number}
 */
// Dynamic Programming
// Time: O(n)
// Space: O(1)
var maxSubArray = function(nums) {
    let max = nums[0], n = nums.length;
    
    for (let i = 1; i < n; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        max = Math.max(nums[i], max)
    }
    return max;
};
console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4]))