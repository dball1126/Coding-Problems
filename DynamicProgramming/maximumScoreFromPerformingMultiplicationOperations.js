/**
 * Do 2D array. Sort the multipliers. Sor the nums
 * State Var: i of nums
 *            j for the idx of multipliers
 * Base case: 0 for out of bounds
 *            0 for no multipliers left
 *            0 if s > e 
 * Recurrence Relation:

 */
// Top down
var maximumScore = function(nums, multipliers) {
    nums.sort((a,b)=> a-b)
    multipliers.sort((a,b)=> a-b)

    const dp = (i, j) => {
        if (j < 0) return 0;
        return nums[i] * multipliers[j]  + dp(i-1, j-1)
    }
    return dp(nums.length-1, multipliers.length-1)
};

console.log(maximumScore(nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6] ))