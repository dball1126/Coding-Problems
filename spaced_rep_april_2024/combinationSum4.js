/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Dynamic Programming
// Time: O(n * m)
// Space: O(m)
var combinationSum4 = function(nums, target) { // Top-Down
    let memo = [...new Array(target+1)]
    const dp = (a) => {
        if (a === 0) return 1;
        if (memo[a] !== undefined) return memo[a]
        memo[a] = 0
        for (let v of nums) {
            if ((a - v) >= 0 && (a - v) < a) {
                memo[a] += dp(a - v)
            }
        }
        return memo[a]
    }
    return dp(target)
};
var combinationSum4 = function(nums, target) { // Bottom-Up
    let memo = [...new Array(target+1)].fill(0)
    memo[0] = 1
    for (let i = 1; i < target+1; i++) {
        memo[i] = 0
        for (let v of nums) {
            if ((i - v) >= 0  && (i - v) < i) {
                memo[i] += memo[i - v]
            }
        }
    }
    return memo[target]
};
console.log(combinationSum4([1,2,3], 4)) // = 7
