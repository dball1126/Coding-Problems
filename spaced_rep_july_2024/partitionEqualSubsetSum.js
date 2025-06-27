/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canPartition = function(nums) {
//     let n = nums.length, half = nums.reduce((acc,v) => acc + v)
//     if (half % 2 !== 0) return false;
//     half = Math.floor(half / 2)
//     const memo = [...new Array(half+1)].map(a => [...new Array(n+1)])
    
//     const dp = (idx, sum) => {
//         if (sum === 0) return true;
//         if (sum < 0) return false;
//         if (idx < 0) return false;
//         if (memo[sum][idx] !== undefined) return memo[sum][idx]
        
//         return memo[sum][idx] = dp(idx-1, sum) || dp(idx-1, sum - nums[idx])
//     }
//     return dp(n-1, half)
// };
var canPartition = function(nums) {
    let n = nums.length, half = nums.reduce((acc,v) => acc + v)
    if (half % 2 !== 0) return false;
    half = Math.floor(half / 2)
    const dp = [...new Array(half+1)].map(a => [...new Array(n+1)].fill(false))
    for (let arr of dp) arr[0] = true

    for (let i = 1; i <= n; i++) {
        let c = nums[i-1]
        for (let t = 1; t <= half; t++) {
            if (t-c >= 0) {
                dp[t][i] = dp[t][i-1] || dp[t-c][i-1] || dp[t][i]
            } else {
                dp[t][c] = dp[t][i] || dp[t][i-1]
            }
        }
    }
    return dp[half][n]
};
console.log(canPartition([1,2,5]

))