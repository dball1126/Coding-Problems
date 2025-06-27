/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const map = new Map(), n = days.length;

    const dp = (idxD, d, curr) => {
        if (idxD >= n) return 0;
        let k = (idxD + ":" + curr)
        let min = Infinity
        d = days[idxD]
        if (map.has(k)) return map.get(k)
        let option2 = Infinity
        if (curr >= d) option2 = dp(idxD+1, d, curr)

        for (let i = 0; i < 3; i++ ) {
            let c, v = costs[i]
            if (i === 0) {
                c = 1
            } else if (i === 1) {
                c = 7
            } else {
                c = 30
            }
            if (curr+c >= d) {
                // console.log("min: " + min + " idxD+1: " + (idxD+1) + " d: " + d + " curr+c: " + (curr+c) + " v: " + v)
                min = Math.min(min, dp(idxD+1, d, curr + c)+ v)
            }
        }
        map.set(k, Math.min(min, option2))
        return Math.min(min, option2)
    }

    return dp(0,0,0)
};
console.log(mincostTickets(days = [1,4,6,7,8,20], costs = [2,7,15]))
