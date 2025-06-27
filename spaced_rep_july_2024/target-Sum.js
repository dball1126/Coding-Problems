/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var findTargetSumWays = function(nums, target) {
//     let n = nums.length
//     const memo = new Map()
//     const dp = (i, s) => {
//         if (i >= n) {
//             return s === target ? 1 : 0
//         }
//         let k = i + ":" + s
//         if (memo.has(k)) return memo.get(k)

//         let val = dp(i+1, s + nums[i]) + dp(i+1, s - nums[i])
//         memo.set(k, val)
//         return val
//     }
//     return dp(0,0)
// };

var findTargetSumWays = function(nums, target) {
    let n = nums.length, half = nums.reduce((acc,v)=>acc+v) + target
    if (half & 1) return 0
    half = Math.floor( half / 2)

    const dp = [...new Array(n+1)].map(a =>
               [...new Array(half+1)].fill(0))

    for (let arr of dp) arr[0] = 1

    for (let r = 1; r <= n; r++) {
        for (let c = 0; c <= half; c++) {
            dp[r][c] = dp[r-1][c]
            if (c - nums[r-1] >= 0) {
                dp[r][c] += dp[r-1][c - nums[r-1]]
            }
        }
    }
    console.log(dp)
    return dp[n][half]
}

console.log(findTargetSumWays([1,1,1,1,1], target = 3))