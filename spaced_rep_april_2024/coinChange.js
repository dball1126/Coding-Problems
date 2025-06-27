/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Dynamic Programming
// Time: O(n * m)...n for coins and a for amount
// Space: O(m)
var coinChange = function(coins, amount) { // Top-Down 
    const n = coins.length;
    const memo = [...new Array(amount)];

    const dp = (a) => {
        if (a === 0) return 0;
        if (memo[a] !== undefined) return memo[a]

        memo[a] = Infinity
        for (let i = 0; i < n; i++) {
            if ((a - coins[i]) >= 0  && (a - coins[i]) < a) {
                memo[a] = Math.min(memo[a], 1 + dp(a - coins[i]))
            }
        }
        return memo[a];
    }
    let returnVal = dp(amount);
    return returnVal === Infinity ? -1 : returnVal
};

var coinChange = function(coins, amount) { // Bottom-Up 
    const n = coins.length;
    const memo = [...new Array(amount+1)].fill(0);
    let amt = amount;
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < n; j++) {
            if ((amt - coins[j]) >= 0  && (amt - coins[j]) < amt) {
                let v = Infinity
                memo[amt] = Math.min(v, 1 + memo[amt - coins[i]])
            }
        }
    }
    return memo[amount]
}


console.log(coinChange(coins = [1,2,5], amount = 6))