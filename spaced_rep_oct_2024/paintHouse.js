/**
 * @param {number[][]} costs
 * @return {number}
 */

// Top-Down Dynamic Programming
// Time and Space: O(n)
var minCost = function(costs) {
    let n = costs.length
    const memo = [...new Array(n+1)].map(a => [...new Array(4)])
    
    const dp = (idx, col) => {
        if (idx >= n) return 0
        if (memo[idx][col] !== undefined) return memo[idx][col]

        let min = Infinity
        for (let i = 0; i < 3; i++) {
            if (col !== i) {
                min = Math.min(min, costs[idx][i] + dp(idx+1, i))
            }
        }
        return memo[idx][col] = min
    }
    return dp(0,-1)
};

console.log(minCost( [[5,8,6],[19,14,13],[7,5,12],[14,15,17],[3,20,10]])) // = 43


