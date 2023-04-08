// Dynamic Programming...top-down
// State Variable: i for idx and min from 0...end of array
// Base Case: 0 if out of bounds, 0 = arr[0], 1 = arr[1]
// Recurrence Relation: dp(i) =  dp(i) + Math.min(dp(i-1), dp(i-2))
var minCostClimbingStairs = function(cost) {
    const memo = new Array(cost.length+1).fill(Infinity);
    memo[0] = cost[0];
    memo[1] = cost[1];
    const dp = (i) => {
        if (i < 0) return 0;
        if (memo[i] !== Infinity) return memo[i];
        memo[i] = cost[i] + Math.min(dp(i-1), dp(i-2));
        return memo[i];
    }
    dp(cost.length-1)
    return Math.min(memo[cost.length-1], memo[cost.length-2])
}; 
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])) // = 6