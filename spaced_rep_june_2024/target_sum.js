/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// top down
// var findTargetSumWays = function(nums, target) {
    
//     const n = nums.length
//     const sum = nums.reduce((acc, v ) => acc + v, 0)
//     if (sum < Math.abs(target)) return 0
//     target = sum + target
//     if (target & 1) return 0
//     target = Math.floor(target / 2)

//     const memo = [...new Array(n+ 1)].map(a => [...new Array( target+ 1)])

//     const dp = (idx, t) => {
//         if (idx < 0) return t === 0 ? 1 : 0
//         if (memo[idx][t] !== undefined) return memo[idx][t]

//         let v1 = dp(idx-1, t), v2 = dp(idx-1, t - nums[idx])
//         return memo[idx][t] = v1 + v2
//     }
//     return dp(n-1, target)
// };

// bottom up 
var findTargetSumWays = function(nums, target) {
    
    const n = nums.length;
    const sum = nums.reduce((acc, v ) => acc + v, 0);
    if (sum < Math.abs(target)) return 0;
    target = sum + target;
    if (target & 1) return 0;
    target = Math.floor(target / 2);

    const dp = [...new Array(n+ 1)].map(a => [...new Array( target+ 1)].fill(0))

    for (let arr of dp) arr[0] = 1

    for (let r = 1; r <= n; r++) {
        for (let c = 0; c <= target; c++) {

            if (c - nums[r-1] >= 0) {
                dp[r][c] = dp[r-1][c - nums[r-1]] +  dp[r-1][c]
            } else {
                dp[r][c] =  dp[r-1][c]
            }
        }
    }
    return dp[dp.length-1][dp[0].length-1]
};

console.log(findTargetSumWays([1,1,1,1,1], target = 3))