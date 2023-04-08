/**
 * State var: i for idx of nums
 * Base cases: 0 for out of bounds or nums[i] = 0, memo[0] = nums[0]
 * Recurrence Relation:
 *  let val = 0
 */
var maxSumAfterOperation = function(nums) {
    if (nums.length === 1) return nums[0];

    const memo = [...new Array(nums.length+1)].fill(-Infinity)
    memo[0] = nums[0]
    const dp = (i) => {
        if (i >= nums.length || i < 0) return 0;
        if (memo[i] !== -Infinity) return 0;
        

    }
    const result = dp(1)

    console.log("-------")
    console.log(memo)
    console.log(result)
    console.log("-------")
    return result;
};

console.log(maxSumAfterOperation(nums = [2,-1,-4,-3]))