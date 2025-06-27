/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Prefix Sums
// Time and Space: O(n)
var subarraySum = function(nums, k) {
    let sum = 0, total = 0, map = new Map([[0, 1]])

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        if (map.has(sum - k)) {
            total += map.get(sum - k)
        }
        if (!map.has(sum)) map.set(sum, 0)
        map.set(sum, map.get(sum) + 1)
    }
    return total
};
console.log(subarraySum(nums = [1,2,3], k = 3))
// = 2 ( 3 and 1+2 = 3)

