/**
 * State Var: 
 *  i for idx of houses, j for idx of colors ........ end of array
 *  (stands for min cost to paint house) 
 * Base Case: 
 *  0 if out of bounds.
 * Recurrence Relation:
 *  if (j === 0)
 *      dp(i) = costs[0] + Math.min(dp(i+1, 1), dp(i+1, 2)) 
 * else if j === 1
 *      dp(i) = costs[1] + Math.min(dp(i+1, 0), dp(i+1, 2))
 * else 
 *      dp(i) = costs[2] + Math.min(dp(i+1, 1), dp(i+1, 0))
 * 
 * dp(i) = Math.min(dp(i), dp(i+, j))
 */
var minCost = function(costs) {
    if (costs.length === 1) return Math.min(costs[0][0], costs[0][1], costs[0][2])
    const memo = [...new Array(costs.length+1)].map(a => [...new Array(4)].fill(Infinity));
    let l = costs.length-1;
    memo[l][0] = costs[l][0]
    memo[l][1] = costs[l][1]
    memo[l][2] = costs[l][2]
    const dp = (i, j) => {
        if (i >= costs.length || j >= 3) return Infinity;
        if (memo[i][j] !== Infinity) return memo[i][j]
        memo[i][j] = 0;
        const next = dp(i, j+1)
        if (j === 0) {
            memo[i][j] = costs[i][j] + Math.min(dp(i+1, 1), dp(i+1, 2))
        } else if (j === 1) {
            memo[i][j] = costs[i][j] + Math.min(dp(i+1, 0), dp(i+1, 2))
        } else {
            memo[i][j] = costs[i][j] + Math.min(dp(i+1, 1), dp(i+1, 0))
        }
        return memo[i][j] = Math.min(memo[i][j], next)
    }
    const result = dp(0, 0)
    return result;
};

console.log(minCost(costs = [[7,6,2],[20,3,0], [1,13,12]]))