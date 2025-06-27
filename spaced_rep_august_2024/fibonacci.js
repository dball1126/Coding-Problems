/**
 * @param {number} n
 * @return {number}
 */
// Top Down Dynamic Programming
// Time and Space: O(n)
var fib = function(n) {
    const memo = [...new Array(n+1)]
    const dp = (num) => {
        if (num === 0) return 0;
        if (num === 1) return 1;
        if (memo[num] !== undefined) return memo[num]
        return memo[num] = dp(num-1)  + dp(num-2)
    }
    return dp(n)
};
// Bottom Up Dynamic Programming
// Time: O(n)
// Space: O(1)
var fib = function(n) {
    if (n === 0) return 1;
    if (n === 1) return 1 
    prev2 = 0
    prev1 = 1;
    for (let i = 2; i <= n; i++) {
        let newPrev = prev1 + prev2
        prev2 = prev1
        prev1 = newPrev
    }
    return prev1
};
console.log(fib(3)) //= 2 


// Bottom Up Dynamic Programming
// Time and Space: O(n)
// var fib = function(n) {
//     const dp = [...new Array(n+1)]
//     dp[0] = 0;
//     dp[1] = 1;
//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i-1]  + dp[i-2]
//     }
//     return dp[n]
// };

