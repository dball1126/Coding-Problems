/**
 * @param {number[]} cost
 * @return {number}
 */
// Dynamic Programming
// Time: O(), Space: O(1)
var minCostClimbingStairs = function(cost) {
    let step1 = cost[0], step2 = cost[1]

    for (let i = 2; i < cost.length; i++) {
        const val = Math.min(step1, step2) + cost[i]
        if (step1 <= step2) {
            step1 += val
            step2 = Math.min(step2, cost[i-2])
        } else {
            step2 += val;
            step1 = Math.min(step1,cost[i-2])
        }
    }
    return Math.min(step1, step2)
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))