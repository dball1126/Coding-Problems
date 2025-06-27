/**
 * @param {number[]} nums
 * @return {number}
 */
// Longest Increasing Subsequence DP Pattern
// Bottom-Up Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var findNumberOfLIS = function(nums) {
    let n = nums.length, maxLen = 1, maxCnt = 0
    const dpLen = [...new Array(n+1)].fill(1) // longest lengths
    const dpCnt = [...new Array(n+1)].fill(1) // count of longest lengths

    for(let i = 1; i <= n; i++) {
        let len = 1, c = 0
        for (let j = i-1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                if ((dpLen[j] + 1) > len) {
                    len = 1 + dpLen[j]
                    c = dpCnt[j]
                } else if ((dpLen[j] + 1) === len) {
                    c += dpCnt[j]
                }
            }
        }
        if (c === 0) c = 1
        dpLen[i] = len
        dpCnt[i] = c
        maxLen = Math.max(maxLen, len)
    }
    // collect count of longest increasing subsequences
    for (let i = 0; i < n; i++) {
        if (dpLen[i] === maxLen) maxCnt += dpCnt[i]
    }
    return maxCnt
};
console.log(findNumberOfLIS(nums =  [1,3,5,4,7])) // = 2
// The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

