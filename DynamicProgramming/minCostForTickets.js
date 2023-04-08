// Top-down: Dynamic Programming
// Base Case: Infinity for out of boounds.
// State Var: i for idx of days, c for cost, p for pass
//  - stands for min cost from i...end of array
// Recurrence Relation:
//  - dp(i, c) = v = days[i], nextVal = 0
//      if c >= v  return dp(i+1, c, p)
//      for cost of costs
//          passCost = (j === 0 ? 1 : (j === 1 ? 7 : 30))
//          nextVal = Math.min(dp(i+1, c + cost, passCost + pass)

// Time & Space: O(n^2)...costs are constant at 3
var mincostTickets = function(days, costs) {
    const memo = new Map()
    let count = 0

    const dp = (i, c, pass) => {
        if (i >= days.length) return c;
        let key = i + ":" + c + ":" + pass
        let val = days[i], nextVal = Infinity;
        // if (memo.has(key)) return memo.get(key)
        console.log(key)
        if (pass >= val) {
            let dpVal = dp(i+1, c, pass)
            memo.set(key, dpVal)
            return dpVal
        } else {
            for (let j = 0; j < costs.length; j++) {
                let cost = costs[j]
                let passCost = (j === 0 ? 1 : (j === 1 ? 7 : 30))
                let next = dp(i+1, cost + c, passCost + pass)
                nextVal = Math.min(nextVal, next)
            }
        }
        memo.set(key, nextVal);
        return nextVal;
    }
    return dp(0, 0, 0)
};

console.log(mincostTickets( days = [1,4,6,9,10,11,12,13,14,15,16,17,18,20,21,22,23,27,28], costs =[3,13,45]))