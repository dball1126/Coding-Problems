/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// Dynamic Programming
// Time and Space: O(n)
// var rob = function(nums) { // Top Down
//     if (nums.length === 1) return nums[0]
//     if (nums.length === 2) return Math.max(nums[0], nums[1])
//     const n = nums.length;
//     let memo = [...new Array(n)]
//     memo[0] = nums[0]; 
//     memo[1] = nums[1]
//     const dp = (idx) => {
//         if (idx < 0 || idx >= n) return 0
//         if (memo[idx] !== undefined) return memo[idx]
//         memo[idx] = Math.max(dp(idx - 1 ), nums[idx] + dp(idx-2))
//         memo[idx-1] = Math.max(memo[idx-1], memo[idx-2])
//         dp(idx+1)
//         return memo[idx]
//     }
//     dp(2)
//     return memo[n-1]
// };

// var rob = function(nums) { // Bottom-Up
//     if (nums.length === 1) return nums[0]
//     if (nums.length === 2) return Math.max(nums[0], nums[1])
//     const n = nums.length;
//     let memo = [...new Array(n)]
//     memo[0] = nums[0]; 
//     memo[1] = nums[1]
//     for (let i = 2; i < n; i++) {
//         memo[i] = Math.max(nums[i] + memo[i-2], memo[i-1])
//         memo[i-1] = Math.max(memo[i-1], memo[i-2])
//     }
//     return memo[n-1]
// }

var rob = function(nums) {
    const n = nums.length;
    let dp = [...new Array(n+1)].map(a => [...new Array(2)].fill(0))
    // console.log(dp)
    dp[0][1] = nums[0]

    for (let i = 1; i < n; i++) {
        dp[i][1] = Math.max(dp[i-1][0] + nums[i], dp[i-1][1]);
        dp[i][0] = dp[i-1][1];
     }
    //  console.log(dp)
     return dp[n-1][1]
}

console.log(rob([2,1,1,2]))