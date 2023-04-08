/**
 * State Var: i for idx of array .... to end of array
 * Base Case: 1 for first element. 0 for out of bounds.
 * Recurrence Relation:
 * for i of nums 
 *   for j of nums 
 *       if (nums[j] < nums[i])
 *          dp(i) = Math.max(dp(i), 1 + dp(j))
 * 
 *  return dp(i)
 *  ***return max in dp array
 */
// Top Down
// var lengthOfLIS = function(nums) {
//     const memo = [...new Array(nums.length+1)].fill(-Infinity)
//     memo[0] = 1;
//     let max = 1;

//     const dp = (i) => {
//         if (memo[i] !== -Infinity) return memo[i];
//         memo[i] = 1;
//         for (let j = 0; j < i; j++) {
//             if (nums[j] < nums[i]) {
//                 memo[i] = Math.max(memo[i], 1 + dp(j))
//             }
//         }
//         return memo[i];
//     }

//     for (let i = 1; i < nums.length; i++) {
//         dp(i);
//     }

//     memo.forEach(v => max = Math.max(max, v))
//     return max
// }
// Bottom Up
var lengthOfLIS = function(nums) {
    const dp = [...new Array(nums.length+1)].fill(1);
    let max = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }

    dp.forEach(v => max = Math.max(max, v))
    return max;
}


console.log(lengthOfLIS(  nums = [0,3,2,3]))