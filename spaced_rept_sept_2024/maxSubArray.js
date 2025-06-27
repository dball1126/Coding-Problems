// https://leetcode.com/problems/maximum-subarray/description/?utm_source=substack&utm_medium=email

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let prevSum = nums[0]
    let max = prevSum

    for (let i = 1; i < nums.length; i++) {
        prevSum = Math.max(nums[i], nums[i] + prevSum)
        max = Math.max(max, prevSum)
    }
    return max;
};
console.log(maxSubArray([5,4,-1,7,8]))