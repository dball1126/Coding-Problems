/**
 * @param {number[]} nums
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n), Space: O(1)
var maxProduct = function(nums) {
    const n = nums.length
    let max = nums[0] || 0
    let min = max

    for (let i = 1; i < n; i++) {
        let tempMin = min
        min = Math.min(nums[i], nums[i] * tempMin, nums[i] * nums[i-1])
        nums[i] = Math.max(nums[i], nums[i] * nums[i-1], nums[i] * tempMin)
        max = Math.max(max, nums[i])

    }
    return max
};
console.log(maxProduct([-1,-2,-9,-6]))