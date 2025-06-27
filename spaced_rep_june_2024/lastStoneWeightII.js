/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let n = stones.length, totalSum = stones.reduce((acc, v) => acc + v, 0)
    if (stones.length === 1) return stones[0]
    let sum = Math.ceil(totalSum / 2)

    const memo = [...new Array(n+1)].map(a => [...new Array( sum + 1)])

    const dp = (idx, s) => {
        if (idx < 0 || s <= 0) {
            let diff = Math.abs(sum - s)
            return Math.abs(Math.abs(totalSum - diff) - sum)
        }
        if (memo[idx][s] !== undefined) return memo[idx][s];
       
        let v1 = dp(idx-1, s), v2 = dp(idx - 1, s - stones[idx])
        return memo[idx][s] = Math.min(v1, v2)
    }
    const result = dp(n-1, sum)
    console.log(memo)
    return result
};
console.log(lastStoneWeightII([31,26,33,21,40]))