/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let n = nums.length
    const memo = [...new Array(n)].map(a => [...new Array(n)])
    let max = 1
    const dp = (i, j, val) => {
        if (j >= n) return val
        if (memo[i][j] !== undefined) return memo[i][j]
        memo[i][j] = 0
        let val1 = 0, val2 = 0 
        if (nums[i] < nums[j]) {
            val1 = dp(j, j+1, val + 1)
        } else {
            val2 = dp(i, j+1, val)
        }
        return memo[i][j] = Math.max(val1, val2)
    }
    for (let i = 0; i < n; i++) {
        max = Math.max(max, dp(i, i+1, 1))
    }
    console.log(memo)
    return max
};
console.log(lengthOfLIS([0,1,0,3,2,3]))