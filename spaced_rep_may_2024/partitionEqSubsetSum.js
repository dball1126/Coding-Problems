/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Top-Down Dynamic Programming
// Time: O(n * m)...n for nums and m for half of the total sum
// Space: O(m)
var canPartition = function(nums) {
    let n = nums.length
    let sum = nums.reduce((a, c) => a + c)
    if (sum & 1) return false
    sum = Math.floor(sum / 2)
    let memo = [...new Array(n)].map(a => [...new Array(sum+1)])

    const dp = (idx, s) => {
        if (s === 0) return true;
        if (idx >= n || s < 0) return false;
        if (memo[idx][s] !== undefined) return memo[idx][s]

        const v = nums[idx] === s || dp(idx+1, s) || dp(idx+1, s - nums[idx])
        return memo[idx][s] = v
    }
    return dp(0, sum)
};
console.log(canPartition([1,5,11,5]))