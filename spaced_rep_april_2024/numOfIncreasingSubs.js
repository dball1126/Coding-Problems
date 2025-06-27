/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let subsequences = 0, map = new Map()
    let n = nums.length;
    let memo = [...new Array(n)].map(a => [...new Array(n)])
    let subLength = 0;
    const dp = (idx, j) => {
        if (j >= n) return 1
        if (memo[idx][j] !== undefined) return memo[idx][j]
        memo[idx][j] = 1
        for (let i = j; i < n; i++) {
            if (nums[i] > nums[idx]) {
                let nxt = (1 + dp(i, i+1))
                if (nxt === memo[idx][j]) {
                    console.log("Length: " + nxt)
                }
                memo[idx][j] = Math.max(memo[idx][j], nxt)
            }
        }
        // console.log("Length: " + memo[idx][j])
        return memo[idx][j]
    }
    for (let i = 0; i < n; i++) {
        dp(i, i+1)
    }
    console.log(memo)
    return subsequences
};
console.log(findNumberOfLIS([1,3,5,4,7]))