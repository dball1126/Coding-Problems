/**
 * @param {number[]} nums
 * @return {number}
 */
// Greedy
// Time: O(n)
// Space: O(1)
var maxAscendingSum = function(nums) {
    let sum = nums[0], maxSum = nums[0], i = 1
    while (i < nums.length) {
        if (nums[i-1] >= nums[i]) {
            maxSum = Math.max(maxSum, nums[i], sum)
            sum = nums[i]
        } else {
            sum += nums[i]
        }
        i++
    }
    return Math.max(sum, maxSum)
};
console.log(maxAscendingSum([10,20,30,5,10,50]))