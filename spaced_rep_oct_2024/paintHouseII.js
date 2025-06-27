/**
 * @param {number[][]} costs
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n * k)...n for # of houses and k for # of costs
var minCostII = function(costs) {
    const n = costs.length, m = costs[0].length;
    let memo = [...new Array(n+1)].map(a => [...new Array(m+1)])

    const dp = (i, j, init) => {
        if (i >= n) return 0;
        if (memo[i][j] !== undefined) return memo[i][j];
        let min = Infinity;

        for (let c = 0; c < m; c++) {
            if (j !== c || init) {
                min = Math.min(min, costs[i][c] + dp(i+1, c, false))
            }
        }
        return memo[i][j] = min;
    }
    return dp(0, 0, true)
};
console.log(minCostII([[1,3],[2,4]])) // = 5 ((1 + 4) OR (3 + 2))



