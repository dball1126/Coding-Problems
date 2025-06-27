/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Prefix Sum | Dynamic Programming
// Time and Space: O(n)
var maxSubArrayLen = function(nums, k) {
    let prefixSum = 0, map = new Map(), n = nums.length, max = -Infinity;

    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];

        if (prefixSum === k) {
            max = Math.max(max, i + 1)
        } else if (map.has(prefixSum - k)) {
            max = Math.max(max, i - map.get(prefixSum - k))
        }

        if (!map.has(prefixSum)) map.set(prefixSum, i)
    }
    return max === -Infinity ? 0 : max;
};
// -1 + 2 = 1
console.log(maxSubArrayLen(nums = [-2,-1,2,1], k = 1)) // = 2

