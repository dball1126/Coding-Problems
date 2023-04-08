/** Dynamic Programming
 * Base case: 0 for 0, 1 for 1, 2 for 2, 4 for 3
 * State Var: i for idx of num of steps from 0....end of steps
 * Recurrence Relation: dp(n) = dp(n - 1) + dp (n - 2) + dp(n - 3)
 */ 
const tripleStep = (steps) => {
    if (!steps) return 0;
    const memo = [...new Array(steps+1)]
    memo[0] = 0, memo[1] = 1, memo[2] = 2, memo[3] = 4
    const dp = (num) => {
        if (num < 0) return 0;
        if (memo[num]) return memo[num]
        return memo[num] = dp(num-1) + dp(num-2) + dp(num-3)
    }
    return dp(steps);
}

console.log(tripleStep(33))


