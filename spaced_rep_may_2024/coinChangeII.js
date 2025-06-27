/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// Top-Down Dynamic Programming
// 0/1 Knapsack (Unbounded)
// Time and Space: O(n * m) n for amount and m for number of coins
var change = function(amount, coins) {
    
    let n = coins.length
    let memo = [...new Array(amount+1)].map(a => [...new Array(n+1)])

    const dp = (amt, idx) => {
        if (amt === amount) return 1;
        if (amt > amount) return 0
        if (memo[amt][idx] !== undefined) return memo[amt][idx]
        let v = 0

        for (let i = idx; i < n; i++) {
            let c = coins[i]
            if (amt + c <= amount && amt + c > amt) {
                v += dp(amt + c, i)
            }
        }
        return memo[amt][idx] = v
    }
    return dp(0, 0)
};
console.log(change(amount = 5, coins = [1,2,5])) // = 4

