/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

/**
 * i for day, s for sum
 */

var minCostTickets = function(allDays, costs) {
    
    let n = allDays.length;
    allDays.sort((a, b) => a - b)

    const dp = (i, days) => {
        if (i >= n) return 0
        if (days >= allDays[n-1]) return 0

        let main = Infinity
        for (let d = 0; d < costs.length; d++) { 
            let day = d === 0 ? 1 : d === 1 ? 7 : 30
            let idx = day + days >= allDays[i] ? i + 1 : i

            main = Math.min(main, costs[d] + dp(idx, day + days))
        }

        return main
    }
    return dp(0, 0)
};
console.log(minCostTickets(days = [1,4,6,7,8,20], costs = [2,7,15]))