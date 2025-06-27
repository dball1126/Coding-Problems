/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length-1
    for (let i = 0; i < cost.length; i++) {
        const v = cost[i];
        let nx1 = i+2 <= n-1 ? cost[i+2] : 0
        let nx2 = i+1 <= n-1 ? cost[i+1] : 0

        cost[i] += Math.min(nx1, nx2)
    }
    let c1 = cost[0] || 0
    let c2 = cost[1] || 0
    return Math.min(c1,c2)
};