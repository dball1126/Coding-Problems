/**
 * @param {number[]} stones
 * @return {number}
 */
// Top-Down Dynamic Programming
// 0/1 Knapsack (Bounded)
// Time: O(n * m)...n for stones and m for half the total sum
// Space: O(m)
var lastStoneWeightII = function(stones) {
    let sum = stones.reduce((acc, v) => acc + v)
    let half = Math.ceil(sum / 2), n = stones.length
    let memo = [...new Array(half+1)]

    const dp = (s , i) => {
        if (i >= n || s >= half) {
            let diff = sum - s
            return Math.abs(s - diff)
        }
        if (memo[s] !== undefined) return memo[s]

        let v1 = dp(s + stones[i], i+1), v2 = dp(s, i+1)
        return memo[s] = Math.min(v1, v2)
    }
    return dp(0, 0)
};
console.log(lastStoneWeightII([31,26,33,21,40]))// = 5
