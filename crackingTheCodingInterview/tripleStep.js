/**
 * Base case: 1 for 1 step, 0 for 0 steps
 * State var i for steps 1 ... n
 * Recurrence Relation:
 *  dp[i] = dp(i-1) + dp(i-2) + dp(n-3)
 */
const tripleStep = (stairs) => {
    let memo = [...new Array(stairs+1)]
    memo[0] = 0, memo[1] = 1;
    
    const dp = (n) => {
        if (n <= 0) return 0
        if (memo[n] !== undefined) return memo[n]
        return dp(n-1) + dp(n-2) + dp(n-3)
    }
    return dp(stairs)
}

console.log(tripleStep(10))