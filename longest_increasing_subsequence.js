// var lengthOfLIS = function(nums) {
//     const dp = Array(nums.length).fill(1);
//     let max = 1;

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = i-1; j >= 0; j--) {

//             if (nums[j] < nums[i]) {
//                 dp[i] = Math.max(dp[j]+1, dp[i])
                
//                 // The number right below nums[i] is guaranteed to be the correct number
//                 // of increasing subsequences...this means we do not need to further calculate
//                 // so we break.
//                 if (nums[j]+1 === nums[i]) break;
//             }
//         }
//     }
//     return Math.max(...dp)
// };

/**
 * State Var: i for idx of nums
 *            p for previous idx(val)
 * Base case: 0 for out of bounds
 * Recurrence Relation:
 *  val = 0
 *  if (nums[i] < nums[p])
 *         val += 1 + dp(i-1, i)
 * 
 * memo[i][p] = Math.max(val, dp(i-1, p))
 */
// Top Down
var lengthOfLIS = function(nums) {
    const memo = [...new Array(nums.length+1)].map(a => [...new Array(nums.length+1)].fill(-Infinity))

    const dp = (i, p) => {
        if (i < 0) return 0;
        if (memo[i][p] !== -Infinity) return memo[i][p]
        memo[i][p] = 0
        let val = 0
        if (i === p || nums[p] > nums[i]) {
            val = 1 + dp(i-1, i)
        }
        memo[i][p] = Math.max(val, dp(i-1, p))
        return memo[i][p]
    }
    return dp(nums.length-1, nums.length-1)
};
// Bottom Up
// var lengthOfLIS = function(nums) {
//     const dp = [...new Array(nums.length+1)].map(a => [...new Array(nums.length+1)].fill(-Infinity))
//     dp[0][0] = 1;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             let val = 0;
//             if (nums[j-1] < nums[i]) {
//                 val = 1 + dp[i][j-1]
//             }
//             dp[i][j] = val;
//         }
//     }
//     console.log(dp)
//     return dp[nums.length-1][nums.length-1]
// }
console.log(lengthOfLIS( [1,3,6,7,9,4,10,5,6]))
    // [1,3,6,7,9,4,10,5,6]))
    // [0,1,0,3,2,3]