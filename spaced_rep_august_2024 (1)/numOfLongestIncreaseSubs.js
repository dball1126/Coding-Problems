/**
 * @param {number[]} nums
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time & Space: O(n^2)
var findNumberOfLIS = function(nums) {
    let n = nums.length, maxSeq = 1
    const dp = [...new Array(n+1)].fill(1)
    const dpFreq = [...new Array(n+1)].fill(0)
    const freqs = new Map([[1, n]])

    for (let i = 0; i < n; i++) {
        let v = dp[i]
        const count = new Map()
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                v = Math.max(v, dp[j] + 1)
                if (!count.has(v)) count.set(v, 0)
                    count.set(v, count.get(v)+1)
                
                if (!freqs.has(v)) freqs.set(v, 0)
                    freqs.set(v, freqs.get(v) + 1)
            }
        }
        dp[i] = Math.max(dp[i], v)
        maxSeq = Math.max(maxSeq, dp[i])
    }
    console.log(freqs)
    console.log(dp)
    return freqs.get(maxSeq)
};
console.log(findNumberOfLIS(  [1,2,4,3,5,4,7,2]))
/**
 * [1,2,3,5,7]
 * [1,2,4,5,7]
 * [1,2,3,4,7]
 */