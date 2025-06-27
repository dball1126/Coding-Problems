/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Top-Down Dynamic Programming
var canPartition = function(nums) {
    let n = nums.length, sum = nums.reduce((acc, v) => acc + v)
    if (sum & 1) return false;
    sum = Math.floor(sum / 2), memo = [...new Array(sum + 1)]

    const dp = (idx, s) => {
        if (s === 0) return true
        if (s < 0 || idx >= n) return false;
        if (memo[s] !== undefined) return memo[s]

        let v1 = dp(idx+1, s - nums[idx]),  v2 = dp(idx+1, s)

        return memo[s] = v1 || v2
    }
    let result = dp(0, sum)
    return result ?  result : false
};
// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for nums and m for half the total sum
// Space: O(m)
var canPartition = function(nums) {
    let n = nums.length, sum = nums.reduce((acc, v) => acc + v)
    if (sum & 1) return false;
    sum = Math.floor(sum / 2), memo = [...new Array(sum + 1)].fill(false)
    memo[0] = true

    for (let i = n-1; i >= 0; i--) {
        let c = nums[i]
        for (let s = sum; s >= c; s--) {
            memo[s] = memo[s] || memo[s - c];
        }
    }
    return memo[sum] ? memo[sum] : false
};
console.log(canPartition( [1,5,11,5])) // = true

