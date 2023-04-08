// Dynamic Programming: Tabulation
// Time and Space: O(n)
// Base Case: 1 = 1, 2 = 2, 0 for out of bounds
// State Var: i for idx of n...end of array,
//            stands for num ways to climb stairs
// Recurrence Relation: dp(i) = dp(i-1) + dp(i-2)
var climbStairs = function(n) {
    let dp = [...new Array(n+1)]
    dp[0] = 1, dp[1] = 2
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n-1]
};

