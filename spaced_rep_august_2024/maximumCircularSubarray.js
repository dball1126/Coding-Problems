/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadane's Algorithm DP Pattern.
// Bottom-Up Dynamic Programming.
// Time and Space: O(n)
var maxSubarraySumCircular = function(nums) {
    
    let n = nums.length, nums2 = nums.map(a => a), v1 = 0, v2 = 0
    nums.push(nums.shift());
    v1 = nums[0] || 0
    for (let i = 1; i < n; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        v1 = Math.max(nums[i], v1)
    }
    nums2.unshift(nums2.pop())
    v2 = nums2[0]
    for (let i = 1; i < n; i++) {
        nums2[i] = Math.max(nums2[i], nums2[i] + nums2[i-1])
        v2 = Math.max(nums2[i], v2)
    }

    return Math.max(v1, v2)
};
console.log(maxSubarraySumCircular([5,-3,5]))