/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Prefix Sum
// Time and Space: O(n)
var subarraySum = function(nums, k) {
    if (!nums.length) return 0;
    let result = 0, map = new Map([[0,1]]), sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        
        if (map.has(sum - k)) {
            result += map.get(sum - k)
        }

        if (!map.has(sum)) map.set(sum, 0)
        map.set(sum, map.get(sum) + 1)
    }
    return result;
};

console.log(subarraySum(nums = [0,0,0], k = 0)) // 6