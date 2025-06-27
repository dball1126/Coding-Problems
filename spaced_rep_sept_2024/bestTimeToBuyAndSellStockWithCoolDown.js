/**
 * @param {number[]} prices
 * @return {number}
 */
// // State Machine DP Pattern
// // Top-Down Dynamic Programming
// // Time & Space: O(n)
// var maxProfit = function(prices) {
//     const n = prices.length
//     const memo = [...new Array(n+1)].map(a => [...new Array(3)])

//     const dp = (idx, state) => { // state = 1 for buy and 0 for sell
//         if (idx >= n) return 0
//         if (idx === n-1) {
//             if (state === 1) return 0
//             return prices[idx]
//         }
//         if (memo[idx][state] !== undefined) return memo[idx][state]
//         let next = dp(idx+1, state)
//         let v = 0
//         if (state === 1) {
//             v = dp(idx+1, 0) - prices[idx]
//         } else {
//             v = dp(idx+2, 1) + prices[idx]
//         }
//         return memo[idx][state] = Math.max(next, v)
//     }
//     return dp(0, 1)
// };
// console.log(maxProfit(prices = [1,2,3,0,2])) // = 3
// // buy day 1 sell day 2 for (1), buy day 4 sell day 5 for (2): 1 + 2 = 3


// State Machine DP Pattern
// Bottom-Down Dynamic Programming
// Time & Space: O(n)
var maxProfit = function(prices) {
    const n = prices.length
    const dp = [...new Array(n+1)].map(a => [...new Array(3)]
    .fill(0)) // base case
    dp[n-1][1] = 0;  // base case
    dp[n-1][0] = prices[n-1] // base case

    for (let i = n-2; i >= 0; i--) {
        for (let state = 0; state <= 1; state++) {
            let nx = dp[i+1][state], v = 0
            if ( state === 1 ) {
                v = dp[i+1][0] - prices[i]
            } else {
                v = dp[i+2][1] + prices[i]
            }
            dp[i][state] = Math.max(nx, v)
        }
    }
    return dp[0][1]
}
console.log(maxProfit(prices = [1,2,3,0,2])) // = 3

