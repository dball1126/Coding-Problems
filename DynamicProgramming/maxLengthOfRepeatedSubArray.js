/**
 * State var: i and j for the idx of the two input arrays
 * Base Case: 0 for out of bounds
 * Recurrence Relation: 
 *  if (nums1[i] === nums2[j])
 *      memo[i][j] = 1 + dp(i+1, j+1)
 *  else 
 *      memo[i][j] = 0
 */
// var findLength = function(nums1, nums2) {
//     let [len, max] = [Math.max(nums1.length, nums2.length), 0];
//     let memo = [...new Array(len+1)].map(a => [...new Array(len+1)].fill(-Infinity))

//     const dp = (i, j) => {
//         if (i >= len || j >= len) return 0;
//         if (memo[i][j] !== -Infinity) return memo[i][j]
//         memo[i][j] = 0;
//         if (nums1[i] === nums2[j]) {
//             memo[i][j] = 1 + dp(i+1, j+1)
//         }
//         dp(i+1, j)
//         dp(i, j+1)
//         max = Math.max(max, memo[i][j])
//         return memo[i][j]
//     }
//     dp(0,0)
//     return max;
// };

// console.log(findLength(nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]))




/**
 * State Var: i for nums1, j for nums2   ....end of arrays
 *            (stands for max length of repeated sub array)
 * Base Case: 0 if out of bounds
 * Recurrence Relation:
 *  for i of nums1
 *      for j of nums2
 *           if nums[i] === nums[j]
 *              if nums[i+1] === nums[j+1]
 *                  dp(i) = 1 + dp(i+1, j+1))
 *              else
 *                  dp(i) = 1 
 *           else
 *              dp(i) = 0
 * 
 * Time & Space: O(n*2)
 */
// Top Down
// var findLength = function(nums1, nums2) {
//     const memo = [...new Array(nums1.length+1)].map(a => [...new Array(nums2.length+1)].fill(-Infinity))
//     let max = 0;

//     const dp = (i, j) => {
//         if (i >= nums1.length || j >= nums2.length) return 0;
//         if (memo[i][j] !== -Infinity) return memo[i][j]
//         if (nums1[i] === nums2[j]) {
//             if (i+1 < nums1.length && j+1 < nums2.length && nums1[i+1] === nums2[j+1]) 
//                 return memo[i][j] = 1 + dp(i+1, j+1)
//             else
//                 return memo[i][j] = 1
//         }
//         return memo[i][j] = 0;
//     }

//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             max = Math.max(max, dp(i, j))
//         }
//     }
//     return max;
// }
// Bottom Up
var findLength = function(nums1, nums2) {
    const dp = [...new Array(nums1.length+1)].map(a => [...new Array(nums2.length+1)].fill(0))
    let max = 0;

    for (let i = nums1.length-1; i >= 0; i--) {
        for (let j = nums2.length-1; j >= 0; j--) {
            if (nums1[i] === nums2[j]) {
                if (i+1 < nums1.length && j+1 < nums2.length && nums1[i+1] === nums2[j+1])
                    dp[i][j] = 1 + dp[i+1][j+1]
                else
                    dp[i][j] = 1
            }
            max = Math.max(max, dp[i][j])
        }
    }
    return max
}
console.log(findLength(nums1 = [1,2,3,10,3,4,5,6], nums2 = [9,4,5,6,1,2,3,10]))

















