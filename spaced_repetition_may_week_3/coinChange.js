/**
 * State var: 0...a for min amount of coins
 * Base Case: Infinity if out of bounds
 *            0 if a === 0
 * Recurrence Relation: 
 *  val = Infinity
 * for i of a
 *  for c of coins
 *      if ( a - c >= 0 && a - c <= a)
 *          val = Math.min(val, 1 + dp(a - c))
 */
const coinChange = (coins, amt) => {
    const memo = new Array(amt + 1).fill(undefined)
    memo[0] = 0;

    const dp = (a) => {
        if (a === 0) return 0;
        if (a < 0) return Infinity;
        if (memo[a] !== undefined) return memo[a];
        let val = Infinity;

        for (let i = 0; i < coins.length; i++) {
            const c = coins[i];
            if (a - c >= 0 && a - c <= a) {
                val = Math.min(val, 1 + dp(a- c))
            }
        }

        return memo[a] = val;
    }
    dp(amt)
    if (memo[amt] === Infinity) return -1
    return memo[amt]
}

console.log

console.log(coinChange([2,3],5))