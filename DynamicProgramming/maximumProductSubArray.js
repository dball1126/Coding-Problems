/**
 * State Var: i for idx of nums
 * Base case: 1 if out of bounds
 * Recurrence Relation: 
 *  dp(i) = Math.max(nums[i], nums[i] * dp(i+1))
 * Time: O(n)
 * Space: O(1)
 */

// Top Down
var maxProduct = function(nums) {
    let max = -Infinity;
    const memo = [...new Array(nums.length+1)].fill(-Infinity)

    const dp = (i) => {
        if (i >= nums.length) return 1;
        if (memo[i] !== -Infinity) return memo[i]
        let val = nums[i] * dp(i+1)
        // if (val === -0) val = 0;

        memo[i] = Math.max(nums[i],  val)
        max = Math.max(max, nums[i])

        return memo[i]
    }
    dp(0);
    console.log(memo)
    return max
};

console.log(maxProduct(nums = [-3,-1,-1]))