/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const passes = [1,7,30], n = days.length

    const memo = new Map()

    const dp = (idx, d) => {
        if (idx >= n) return 0

        let next = Infinity, val = Infinity
        if (d !== 0 && days[idx] <= d) next = dp(idx+1, d)
        for (let i = 0; i < costs.length; i++) {
            let cost = costs[i], pass = passes[i]
            // if ((d + pass) >= days[idx]) {
                val = Math.min(val, cost + dp(idx+1, d + pass))
            // }
        }
        return Math.min(val, next)
    }
    return dp(0, 0)
};
console.log(mincostTickets( [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]))