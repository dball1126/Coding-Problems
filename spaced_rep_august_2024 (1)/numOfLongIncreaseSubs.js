/**
 * @param {number[]} nums
 * @return {number}
 */

// Bottom-Up Dynamic Programming
// Time and Space: O(n^2)
// var findNumberOfLIS = function(nums) {
//     let n = nums.length, longest = 1, numOfIncreasingSubs = 0;
//     const dp = [...new Array(n+1)].fill(1)
//     const amtDp = [...new Array(n+1)].fill(1)

//     for (let i = 0; i < n; i++) {
//         let long = 1, map = new Map(), currAmt = 0
//         for (let j = 0; j < i; j++) {
   
//                 long = Math.max(long, 1 + dp[j])
//                 longest = Math.max(long, longest)
//                 if (!map.has(long)) map.set(long, 0)
//                 map.set(long, map.get(long) + 1)
//             }
//         }
//         if (long !== 1) {
//             dp[i] = long // longest val per index
//             amtDp[i] = map.get(long) // num of longest val's per index
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (dp[i] === longest) {
//             numOfIncreasingSubs += amtDp[i] // add the number of longest subs per index
//         }
//     }
//     console.log(longest)
//     console.log(dp)
//     console.log(amtDp)
//     return numOfIncreasingSubs
// };
console.log(findNumberOfLIS([1,2,4,3,5,4,7,2])) // 2 = [1,3,5,7] & [1,3,4,7]

