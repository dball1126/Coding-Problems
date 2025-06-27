/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
    
    let prefixSums = new Map()
    let min = Infinity
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        if (nums[i] > k) return 1;
        sum |= val

        if (sum > k) {
            let diff = sum - (k+1)
            if (prefixSums.has(diff) && diff ^ sum > k+1) {
                min = Math.min(min, i+1 - prefixSums.get(diff))
            }
            min = Math.min(min, i+1)
        }
        if (!prefixSums.has(sum)) prefixSums.set(sum, Infinity)
        prefixSums.set(sum, prefixSums.get(sum), i+1)
        prefixSums.set(val, 1)
    }

    return min === Infinity ? -1 : min
};
console.log(minimumSubarrayLength( [4,8,7], k = 12))

[1,2,3,4,5]

[1,3,3,7]