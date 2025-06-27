/**
 * @param {number} n
 * @return {number}
 */
// const memo = [...(new Array(n+1).keys())]
// 
// var numTrees = function(n) {
//     const memo = [...(new Array(n+1))]

//     const dp = (num) => {
//         if (num <= 1) return 1;
//         if (memo[num] !== undefined) return memo[num]
//         let val = 0

//         for (let i = 1; i <= num; i++) {
//             val += (dp(i-1) * dp(num - i))
//         }
//         return memo[num] = val;
//     }
//     return dp(3)
// };

var numTrees = function(n) {
    const dp = [...(new Array(n+1).keys())]
    dp[0] = 1
    let val = 0
    for (let i = 1; i <= n; i++) {
        dp[i] =(dp[i-1] || 1) * (dp[n - i] || 1)
        val += (dp[i-1] || 1) * (dp[n - i] || 1)
    }
    return val
};
console.log(numTrees(4))