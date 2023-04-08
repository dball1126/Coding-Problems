/**
 * State Var: i for idx of days to ....end of input
 *            t for transaction (1 for buying, 0 for selling)
 * Base Case: 0 for idx out of bounds OR t === 1 &&  i >= input.length-1
 * Recurrence Relation:
 *  if t === 1
 *      dp[i] = Math.max(dp(i+1, t), dp(i+1, 0) - dp[i])
 *  else
 *      dp[i] = Math.max(dp(i+1, t), dp(i+2, 1) + dp[i])
 * Time: O(n) * 4 = O(n)
 * Space: O(n) * 3 = O(n)
 */
// Top-Down
var maxProfit = function(prices) {
    const memo = [...new Array(prices.length+1)].map(a => [...new Array(3)].fill(-Infinity));

    const dp = (i, t) => {
        if (i >= prices.length || (t === 1 && i >= prices.length-1)) return 0;
        if (memo[i][t] !== -Infinity) return memo[i][t];
        if (t === 1) {
            return memo[i][t] = Math.max(dp(i+1, t), dp(i+1, 0) - prices[i])
        } else {
            return memo[i][t] = Math.max(dp(i+1, t), dp(i+2, 1) + prices[i])
        }
    }
    return dp(0, 1);
}
// Bottom up
var maxProfit = function(prices) {
    const dp = [...new Array(prices.length+2)].map(a => [...new Array(4)].fill(0));
    for (let i = prices.length-1; i >= 0; i--) {
        
        if (i < prices.length-1) {
            dp[i][1] = Math.max(dp[i+1][1], dp[i+1][0] - prices[i])
        }

        dp[i][0] = Math.max(dp[i+1][0], dp[i+2][1] + prices[i])
    }
    console.log(dp)
    return dp[0][1]
}
console.log(maxProfit( prices = [1,1,3,1,1,2]))