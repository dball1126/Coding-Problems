/**
 * @param {number} n
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Fibonacci Numbers (Pattern)
// Time and Space: O(n)
var climbStairs = function(n) {
    
        const dp = [...new Array(n+1)].fill(0)
        dp[0] = 1;

        for (let i = 1; i <= n; i++) {
            let v2 = 0
            if (i-2 >= 0) v2 = dp[i-2]
            dp[i] = dp[i-1] + v2
        }
        return dp[n]
};

console.log(climbStairs(4)) // = 5



