/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  
    let n = nums.length
    const dp = [...new Array(target+1)].fill(0)
    dp[0] = 1

    for (let a = 1; a <= target; a++) {
        for (let c of nums) {
            if ((a - c) >= 0) {
                dp[a] += dp[a-c]
            }
        }
    }
    return dp[target]
};
console.log(combinationSum4([9], 3))