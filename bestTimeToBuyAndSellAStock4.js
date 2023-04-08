/**
 * State variables: i      i+1.......prices.length-1 | s steps available | h 1 = buy -1 = sell ......buying or selling
 * Recurrence Relation: dp[i] = Math.max(dp[i], if buying fillDP(i+1, s, selling) - dp[i]) ||
 *                              Math.max(dp[i], if selling fillDp(i+1, s-1, buying) + dp[i])
 *                      else continue Math.max(dp[i], fillDP(i+1, s, h))
 */

// var maxProfit = function(k, prices) {
//     const memo = new Map();
//     const dp = prices.map(e => undefined)
//     let max = -Infinity;
    
//     const fillDP = (i, s, h) => {
//         console.log("i " + i)
//         console.log("s " + s)
//         console.log("h " + h)
//         if (i >= prices.length || s === 0) return 0;
//         // if (dp[i] !== undefined) return dp[i]
//         dp[i] = 0;

//         // for (let j = i+1; j < prices.length; j++) {
//             if (h === 1) {
//                 dp[i] = Math.max(dp[i], fillDP(i+1, s, -1) - prices[i])
//             } else {
//                 dp[i] = Math.max(dp[i], fillDP(i+1, s-1, 1) + prices[i])
//             }
//         // }
//         // dp[i] = Math.max(dp[i], fillDP(i+1, k, 1))
//         // fillDP(i+1, k, 1)
//         max = Math.max(max, dp[i])
//         return dp[i]
//     }
//     // for (let i = 0; i < prices.length; i++) {
//         fillDP(i, k, 1)
//     // }
//     console.log(memo)
//     console.log(dp)
//     return max
// };

// var maxProfit = function(k, prices) {
//     const dp = prices.map(e => undefined)
//     const dpMap = new Map();

//     const fillDP = (i, s, h) => {
//         if (i >= prices.length || s === 0) return 0;
//         const key = i + '' + s + '' + h;
//         if (dpMap.has(key)) dpMap.get(key)
//         const doNothing = fillDP(i+1, s, h)
//         let doSomething;

//         if (h === 1) { // buying
//             doSomething = fillDP(i+1, s, 0) - prices[i]
//         } else {
//             doSomething = fillDP(i+1, s-1, 1) + prices[i]
//         }

//         dp[i] = Math.max(doSomething, doNothing)
//         dpMap.set(key, dp[i])
//         return dp[i]
//     }
//     fillDP(0, k, 1)
//     console.log(dp)
//     return dp[0]
// };

// i copied this code
// const maxProfit = (k, prices) =>{
//     let n = prices.length;
//     // let dp[][][] = new let[n + 1][k + 1][2];
//     const dp = [...Array(k+1)].map(() => Array(prices.length).fill(0));
    
//     for (let i = n - 1; i >= 0; i--) {
//         for (let transactionsRemaining = 1; transactionsRemaining <= k; transactionsRemaining++) {
//             for (let holding = 0; holding < 2; holding++) {
//                 let doNothing = dp[i + 1][transactionsRemaining][holding];
//                 let doSomething;
//                 if (holding == 1) {
//                     // Sell stock
//                     doSomething = prices[i] + dp[i + 1][transactionsRemaining - 1][0];
//                 } else {
//                     // Buy stock
//                     doSomething = -prices[i] + dp[i + 1][transactionsRemaining][1];
//                 }
                
//                 // Recurrence relation
//                 dp[i][transactionsRemaining][holding] = Math.max(doNothing, doSomething);
//             }
//         }
//     }
    
//     return dp[0][k][0];
// }

// return dp[0][k][0];

console.log(maxProfit( k = 2, prices = [2,6,7,5]))