/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const n = costs.length
    let memo = [...new Array(n+1)]

    const dp = (i) => {
        if (i >= n ) return 0
        if (memo[i]) return memo[i]
        let min = Infinity
        for (let idx = i; idx < n; idx++) {
           for (let j = 0; j < 3; j++) {
                min = Math.min(min, costs[idx][j] + dp(i+1, 0))
           }
        }

        return min
    }
    return dp(0)
};
console.log(minCost([[17,2,17],[16,16,5],[14,3,19]]))