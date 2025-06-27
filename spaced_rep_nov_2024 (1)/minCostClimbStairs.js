/**
 * @param {number[]} cost
 * @return {number}
 */
// Bottom Up Dynamic Programming
// Time: O(n)
// Space: O(1)
var minCostClimbingStairs = function(cost) {
    let step2 = cost[0], step1 = cost[1]

    for (let i = 2; i < cost.length; i++) {
        const v = Math.min(cost[i]+ step1, cost[i] + step2);
        step2 = step1
        step1 = v
    }
    return Math.min(step1, step2)
};
console.log(minCostClimbingStairs([10,15,20])) // = 15


