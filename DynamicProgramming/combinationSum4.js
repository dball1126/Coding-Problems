/**
 * State Var: i for idx of nums, t for target
 * Base case: 1 if target === 0, 0 if bound of bounds
 * Recurrence Relation: 
 *  dp(i, t)=  val = 0
 *             nums.forEach (v, idx)
 *               val += dp(idx, t-v)
 *             return val
 */
var combinationSum4 = function(nums, target) {
    // 2D Array
    const memo = [...new Array(nums.length+1)].map(a => [...new Array(target+1)].fill(-Infinity))

    const dp = (i, t) => {
        if (t === 0) return 1;
        if (t < 0 || i >= nums.length || i < 0) return 0
        if (memo[i][t] !== -Infinity) return memo[i][t]
        memo[i][t] = 0;

        nums.forEach((v, idx) => {
            memo[i][t] += dp(idx, t-v)
        })
        return memo[i][t]
    }
    return dp(0, target)
};

console.log(combinationSum4(nums = [1,5], target = 5))