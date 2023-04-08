/**
 * Sate var: i for idx of nums
 *           d for the deleted idx of nums
 *           t 1 for increasing, 0 for decreasing
 * 2D array for nums
 * Base Case: 0 for out of bounds
 * Recurrence Releation:
 *  val = 0 
 *  max = 0
 *      if (d === undefined)
 *          val = nums[i] + dp(i-1, 1) + dp(i+1, 1)
 *      if (d !== undefined) {
 *          if nums[i] !== d
 *              val += nums[i]
 *          val += dp(i+1, 1)
 *      }
 *     memo[i][d] = val
 *      dp(i+1, d)
 *     max = Math.max(memo[i][d], max , dp(i+1, d))
 *     return memo
 */
var deleteAndEarn = function(nums) {
    const memo = [...new Array(nums.length+1)].map(a => [...new Array(nums.length+1)].fill(-Infinity))
    let max = -Infinity;
    
    const dp = (i, d) => {
        if (i < 0 || i >= nums.length) return 0;
        if ( memo[i][d] !== -Infinity) return memo[i][d]
        memo[i][d] = 0;

        if (d === undefined) {
            memo[i] = nums[i] + dp(i-1, nums[i] - 1) + dp(i+1, nums[i] + 1)
        } else if (nums[d] !== nums[i]) {
            memo[i] = nums[i] + dp(i-1, nums[i] -1) + dp(i+1, nums[i] + 1)
        } else {
            memo[i] = dp(i-1, d) + dp(i+1, d)
        }
        max = Math.max(max, memo[i])
        if (d === undefined)
        return memo[i]
    }

    dp(0, undefined)
    console.log(memo)
    return max
};

console.log(deleteAndEarn( [3,4,2] ))