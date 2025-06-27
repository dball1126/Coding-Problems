/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Top-down Dynamic Programming
// Time: O(n * m)...n for nums and m for target
// Space: O(m)
// var combinationSum4 = function(nums, target) {
//     const memo = [...new Array(target+1)]

//     const dp = (t) => {
//         if (t === 0) return 1;
//         if (memo[t] !== undefined) return memo[t]
//         memo[t] = 0
//         for (let num of nums) {
//             if (t - num >= 0 && t - num < t) {
//                 memo[t] += dp(t - num)
//             }
//         }
//         return memo[t]
//     }
//     const result =  dp(target)
//     return result
// };


// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for nums and m for target
// Space: O(m)
var combinationSum4 = function(nums, target) {
    const memo = [...new Array(target+1)].fill(0)
    memo[0] = 1

    for (let t = 1; t <= target; t++) {
        for (let c of nums) {
            if (t -c >= 0) {
                memo[t] += memo[t - c]
            }
        }
    }
    return memo[target]
};
console.log(combinationSum4([1,2,3],4)) // = 7




/** [1] = 1
 * [2] = 2
 *  [3] = 3
 *  [4] -1 = 3 + (4 - 2) = 2 + (4 - 3) = 1 + (4 - )
 4 - > 3 - > 2 - > 1

 3 = 
 dp(3 - 1) + dp(3 - 2) + dp(3 - 3)
 dp(3 - 1) = 2   + dp(3 - 2) = 1 + dp(3 - 3) = 1
 */