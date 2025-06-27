/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let n = prices.length;
//     let max = 0

//     let memo = [...new Array(n)].map(a => [...new Array(2)].fill(undefined))
//     const dp = (idx, opt) => {
//         if (idx < 0 || idx >= n) return -Infinity
//         if (memo[idx][opt] !== undefined) return memo[idx][opt]
//         if (opt === 0) {
//             const next = dp(idx+1, opt)
//             const curr= dp(idx+1, 1) - prices[idx]
//             let nextVal = Math.max(next, curr)
//             console.log("nextVal " + nextVal)
//             return memo[idx][opt] = nextVal
//         } else {
//             return memo[idx][opt] = Math.max(prices[idx], dp(idx+1, 1))
//         }
//     }
//     dp(0, 0)
//     return memo
// };

// var maxProfit = function(prices) {
//     let n = prices.length;
//     let max = 0
//     let memo = [...new Array(n)].map(a => [...new Array(2)].fill(0))
//     const dp = (idx, opt) => {
//         if (idx < 0 || idx >= n) return 0
//         if (memo[idx][opt] !== undefined)
//         if (opt === 0) {
//             return memo[idx][opt] = Math.max(dp(idx+1, opt), dp(idx+1, 1) - prices[opt])
//         } else {
//             return memo[idx][opt] = Math.max(prices[idx], dp(idx+1, 1))
//         }
//     }
//     dp(0, 0)
//     return memo[0]
// };
console.log(maxProfit([7,6,4,3,1]))