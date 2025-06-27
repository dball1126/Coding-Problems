/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amt) {
    if (!amt) return 0
    let memo = [...new Array(amt+1)]

    const dp = (idx, a) => {
        if (a === 0) return 1;
        if (idx >= coins.length) return Infinity
        if (memo[a] !== undefined) return memo[a]
        memo[a] = Infinity 

        for (let i = idx; i < coins.length; i++) {
            if ((a - coins[i]) >= 0 && ((a - coins[i]) <= a)) {
                memo[a] = Math.min(memo[a], dp(i, a - coins[i]))
            }
        }
        return memo[a]
    }
    dp(1, amt)
    console.log(memo)
    return memo[amt] === Infinity ? -1 : memo[amt]
};
console.log(coinChange([1,3], 3))