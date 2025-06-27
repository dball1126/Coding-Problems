/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Prefix Sums
// Time and Space: O(n)
var maxSubArrayLen = function(nums, k) {
    let prefixSums = new Map(), n = nums.length;
    prefixSums.set(0, -1)
    let sum = 0, max = 0;
    for (let i = 0; i < n; i++) {
        const v = nums[i];
        sum += v

        if (prefixSums.has(sum - k)) {
            max = Math.max(max, i - prefixSums.get(sum - k))
        }

        if (!prefixSums.has(sum)) prefixSums.set(sum, i)
    }

    return max
};
console.log(maxSubArrayLen([12,3,3,3,3], k = 12)) // = 4

