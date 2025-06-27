/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let n = stones.length, sum = stones.reduce((acc, v)=>acc+v)
    let min = stones[0]
    let half = Math.floor(sum / 2)
    const memo = [...new Array(half+1)]
    memo[0] = stones[0]
    for (let i = 1; i <= half; i++) {
    for (let s of stones) {
        dp[i] = Math.min()
    }
    }
};