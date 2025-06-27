/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time: O(n * m)...coins * amt
// space: O(m)...amt
// var coinChange = function(coins, amount) {
//     const memo = [...new Array(amount+1)], n = coins.length

//     const dp = (a) => {
//         if (a === 0) return 0;
//         let ans = Infinity

//         if (memo[a] !== undefined) return memo[a]

//         for (let i = 0; i < n; i++) {
//             let v = coins[i]

//             if ((a - v) >= 0 && (a - v) < a) {
//                 ans = Math.min(ans, dp(a - v) + 1)
//             }
//         }
//         return memo[a] = ans
//     }
//     let result = dp(amount)
//     return result === Infinity ? -1 : result;
// };

// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for coins and m for amount
// Space: O(m)
var coinChange = function(coins, amount) {
    const memo = [...new Array(amount+1)].fill(Infinity)
    memo[0] = 0
    for (let i = 1; i <= amount; i++) {

        for (let c of coins) {
            if (i - c === 0) {
                memo[i] = 1
            } else if (i - c >= 0 && i - c < i) {
                memo[i] = Math.min(memo[i], (memo[i-c]  + 1))
            }
        }
    }
    return memo[amount] === Infinity ? -1 : memo[amount]
};
console.log(coinChange(coins = [1], amount = 0)) // = 3



