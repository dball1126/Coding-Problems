/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Prefix Sum, Dynamic Programming
// Time and Space: O(n)
var subarraySum = function(nums, k) {
   let dp = new Map([[0,1]]), n = nums.length, prefixSum = 0, total = 0;
    for (let i = 0; i < n; i++) {
        prefixSum += nums[i]

        if (dp.has(prefixSum - k)) total += dp.get(prefixSum - k)

        if (!dp.has(prefixSum)) dp.set(prefixSum, 0)

        dp.set(prefixSum, dp.get(prefixSum) + 1)
    }
    return total
};
console.log(nums = [1,2,3], k = 3) // = 2

