/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0;
    let prefixSums = new Map([[0,1]])
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (prefixSums.has(sum - k)) {
            count += prefixSums.get(sum - k)
        }
        if (!prefixSums.has(sum)) prefixSums.set(sum, 0)
        prefixSums.set(sum, prefixSums.get(sum) + 1)
    }

    return count;
};
console.log(subarraySum(nums = [1,-1,0], k = 0))