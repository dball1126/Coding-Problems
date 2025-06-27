/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Bottom-Up Dyanmic Programming
// Time and Space: O(n * m)
var combinationSum4 = function(nums, target) {
    
    const dp = [...new Array(target + 1)].fill(0)
    dp[0] = 1

    for (let a = 0; a <= target; a++) {
        
        for (let c of nums) {
            if (a -c >= 0) {
                dp[a] += dp[a - c]
            }
        }
    }
    return dp[dp.length-1]
};

console.log(combinationSum4(nums = [9], target = 3))