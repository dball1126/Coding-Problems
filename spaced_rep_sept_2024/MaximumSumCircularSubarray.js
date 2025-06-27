/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadane's Algorithm DP Pattern
// Bottom-Up Dynamic Programming
// Prefix And Suffix Sums.
// Time and Space: O(n)
var maxSubarraySumCircular = function(nums) {
    let suffix = [...nums], n = nums.length, prefix = [...nums]

    for (let i = n-2; i >= 0; i--) { // prepare Suffix Sums
        suffix[i] += suffix[i+1]
    }

    let max = nums[0]

    for (let i = 1; i < n; i++) {
        let suffixAndPre = -Infinity
        // if (i+1 < n) {
        //     suffixAndPre = suffix[i+1] + prefix
        // }
        prefix += nums[i] // prepare prefix sums
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]) // Kadane's Algo
        max = Math.max(nums[i], suffixAndPre, max)
    }
    return max;
};
console.log(maxSubarraySumCircular([5,-3,5])) // = 10 = (5 + 5)