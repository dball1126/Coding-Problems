/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    let prev1 = cost[1] || Infinity, prev2 = cost[0] || Infinity;

    for (let i = 2; i < cost.length; i++) {

        if (i === cost.length-1) {
            return Math.min(prev1, prev2 + cost[i])
        }

        let v = Math.min(cost[i] + prev1, cost[i] + prev2)
        prev2 = prev1
        prev1 = v
    }
    return Math.min(prev1, prev2)
};
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))