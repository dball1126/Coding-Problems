/**
 * State var: i for idx of prices
 *            t for 1(buying),0(selling)
 *            k transactions remaining
 * Base Case:
 *  0 if k === 0 || i >= prices.length || t === 1 && prices.length === prices.length-1
 * Recurrence Relation:
 *  v = 0
 *  for i of prices
 *      if t === 1
 *          v = -prices[i] + dp(i+1, 0, k)
 *      else 
 *          v = prices[i] + dp(i+1, 1, k-1)
 *      }
 *  }
 *  dp[i]  = Math.max(v, dp(i+1, t, k))
 *  return dp[i]
 */
// Top Down
var maxProfit = function(k, prices) {
    const memo = [...new Array(prices.length+1)].map(a => [...new Array(2)].fill(-Infinity))
    let max = 0;
    const dp = (i, t, k) => {
        if (k === 0 || i >= prices.length || (t === 1 && prices.length === -1)) return 0;
        if (memo[i][t] !== -Infinity) return memo[i][t]
        // const doNothing = dp(i+1, t, k);
        memo[i][t] = 0;
        if (t === 1) {
            memo[i][t] = Math.max(dp(i+1, t, k), -prices[i] + dp(i+1, 0, k)) 
        } else {
            memo[i][t] = Math.max(dp(i+1, t, k), dp(i+1, 1, k-1) + prices[i])
        }
        // memo[i][t] = Math.max(memo[i][t], doNothing)
        return memo[i][t]
    }
    dp(0, 1, k)
    memo.forEach(v => max = Math.max(max, v[1]))
    console.log(memo)
    return max;
};

console.log(maxProfit(2, [2,1,4,5,2,9,7]))

