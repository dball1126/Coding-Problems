/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let sum = stones.reduce((acc, v) => acc + v)
    let n = stones.length
    let memo = [...new Array(n+1)].map(a => [...new Array(n+1)])
    let half = Math.ceil(sum / 2)
    let max = -Infinity
    const dp = (i, sum) => {
        if (i >= n || sum > half) return -Infinity
        if (sum === half) return half
        // if (memo[i][sum] !== undefined) return memo[i][sum]
        let v1 = dp(i+1, sum + stones[i]), v2 = dp(i+1, sum)
        let val = Math.max(v1, v2, sum)
        max = Math.max(max, val)
        return memo[i][sum] = val
    }
    let result = dp(0,0)
    return Math.abs((sum - result) - result)
};
console.log(lastStoneWeightII([31,26,33,21,40]))

// [31,26,33,21,40]
/**
 
151 




 * 
 * 
 */