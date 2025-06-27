/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Prefix Sums
// Time and Space: O(n)
var longestOnes = function(nums, k) {
    let max = 0
    let zeros = 0
    const prefixSums = new Map()
    for (let i = 0; i < nums.length; i++) {
        let v = nums[i]
        if (v === 0) zeros++
        if (zeros <= k) {
            max = Math.max(max, i - 0 + 1)
        } else if (prefixSums.has(zeros - k)){
            let idx = prefixSums.get(zeros - k)
            max = Math.max(max, i - idx)
        }
        if (!prefixSums.has(zeros)) prefixSums.set(zeros, i)

    }
    return max
};
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], k = 2))// = 6

/**
 * 1: 0
 * [0,0,1,1] 
 * 3 - 0 + 1 
 */