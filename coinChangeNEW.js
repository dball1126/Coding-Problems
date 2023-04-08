/**
 * dp(amount) = Math.min(dp(amount), 1 + dp(coins[i] - amount)) if reachable
 * Time Complexity: coins * amount  O(n * m)
 * Space Complexity: amount O(m)
 */
// Top-Down
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    let memo = new Map();
    let max = 0;
    const dp = (a) => {
        if (memo.has(a)) return memo.get(a)
        if (a === 0) {
            return 0
        }
        if (a < 0) return Infinity;
        coins.forEach(c => {
            let [amt, val] = [a-c, Infinity]
            if (amt >= 0) {
                val = dp(amt)
            }
            let dpVal = memo.has(a) ? memo.get(a) : Infinity
            memo.set(a, Math.min(dpVal, 1 + val))
        })
        return memo.get(a);
    }

    const result = dp(amount)
    console.log(max)
    return result === Infinity ? -1 : result
};

console.log(coinChange(coins = [1,2,5],5))