
// top down
var coinChange = function(coins, amount) {
    let memo = [...new Array(amount+1)]
    const dp = (a) => {
        if (a === 0) return 0;
        if (a < 0) return Infinity
        if (memo[a] !== undefined) return memo[a]
        let overallMin = Infinity

        for(let i = 0; i < coins.length; i++) {
            if ((a - coins[i]) >= 0 && (a - coins[i]) < a) {
                let val = dp(a-coins[i])
                if (val !== Infinity) val += 1
                overallMin = overallMin === Infinity ? val : Math.min(val, overallMin)
            }
        }
        return memo[a] = overallMin
    }
    let result = dp(amount)
    return result === Infinity ? -1 : result
};

// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for amount and m for coins length
// Space: O(n)...for amount
var coinChange = function(coins, amount) {
    let dp = [...new Array(amount+1)].fill(Infinity)
    dp[0] = 0
   
    for (let i = 1; i <= amount; i++) {
        for(let c of coins) {
            if ((i -c ) >= 0 && (i - c) < i) {
                dp[i] = Math.min(dp[i], dp[i-c] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
console.log(coinChange([1,2,5],11))//=3


