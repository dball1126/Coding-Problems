// Base Case: 0 if out of bounds of buying is last index
// State var: i for idx of stocks, j for 1 = buying, 0 = selling
// Recurrence Relation:
// dp(i, j) = if j === 0
//                  Math.max(do(i+1, 0), dp(i+2, 1) + stocks[i]) 
//                else 
//                 Math.max(dpi+1, 0)


// top down 
// var maxProfit = function(prices) {
//     let n = prices.length;
//     let memo = [...new Array(prices.length+1)].map(a => [...new Array(2)].fill(-Infinity))

//     const dp = (i, j) => {
//         if (i >= n) return 0
//         if (i === n-1) {
//             return j === 1 ? 0 : prices[i]
//         }
//         if (memo[i][j] !== -Infinity) return memo[i][j]

//         let val = 0

//         if (j === 1) {
//             val = Math.max(dp(i+1, j), dp(i+1, 0) - prices[i])
//         } else {
//             val = Math.max(dp(i+1, j), dp(i+2, 1) + prices[i])
//         }
//         return memo[i][j]= val;
//     }
//     let result = dp(0,1);
//     return result
// };

// Bottom Up Dynamic Programming
// Time and Space: O(n)...n * 2 = n
var maxProfit = function(prices) {
    let n = prices.length-1;
    let dp = [...new Array(prices.length+1)].map(a => [...new Array(2)].fill(0))

    for (let i = n; i >= 0; i--) {
        for (let j = 1; j >= 0; j--) {
            if (i  === n ) {
                dp[i][j] = j === 1 ? 0 : prices[i]
            } else {
                if (j === 1) {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i+1][0] - prices[i])
                } else {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i+2][1] + prices[i])
                }
            }
        }
    }
    return dp[0][1]
}
console.log(maxProfit([1,2,3,0,2])) //=3