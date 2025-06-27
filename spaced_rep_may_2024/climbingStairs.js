/**
 * @param {number} n
 * @return {number}
 */
// Bottom-up Dynamic Programming
// Fibonacci Pattern.
// Time & Space: O(n)
var climbStairs = function(n) {
    let dp = [...new Array(n)]
    dp[n-1] = 1

    for (let i = n-2; i >= 0; i--) {
        let v1 = 0, v2 = 0
        if (i+2 >= n) {
            v2 = 1
        } else {
            v2 = dp[i+2]
        }
        v1 = dp[i+1]
        
        dp[i] = v1 + v2
    }
    return dp[0]
};
console.log(climbStairs(3)) // = 3

