// Top down
// var maxProfit = function(prices, fee) {
//     let memo = [...new Array(prices.length+1)].map(a => [...new Array(3)].fill(-Infinity))
//     const dp = (i, t) => {
//         if (i === prices.length-1 && t === 1 || i >= prices.length){
//             return 0;
//         }
//         if (memo[i][t] !== -Infinity) return memo[i][t]
    
//         if (t === 1) {
//            return memo[i][t] = Math.max(dp(i+1,t),
//                 - prices[i] + dp(i+1, 0))
//         } else {
//             return memo[i][t] = Math.max(dp(i+1, t),
//                 prices[i] + dp(i+1, 1) - fee)
            
//         }
//     }
//     return dp(0, 1)
// }

// Bottom up
var maxProfit = function(prices, fee) {
    let dp = [...new Array(prices.length+1)].map(a => [...new Array(3)].fill(0))
    for (let i = prices.length-1; i >= 0; i--) {
        if (i !== prices.length-1) {
            dp[i][1] = Math.max(dp[i+1][1], -prices[i] + dp[i+1][0]) 
        }
        dp[i][0] = Math.max(dp[i+1][0], prices[i] + dp[i+1][1] - fee)
    }
    return dp[0][1]
}

console.log(maxProfit(prices = [1,3,2,8,4,9], fee = 2))