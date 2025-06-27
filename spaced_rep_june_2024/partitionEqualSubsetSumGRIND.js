/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, v) => acc + v)
    if (sum % 2 === 1) return false;
    let half = Math.floor(sum / 2), n = nums.length;
    const dp = [...new Array(n+1)].map(a => [...new Array(half+1)].fill(false))

    for (let arr of dp) arr[0] = true;


    for (let i = 0; i < nums.length; i++) {
        for (let s = 1; s <= half; s++) {
            if (s - nums[i] >= 0) {
                dp[i][s] = dp[i][s - nums[i]]
            }
        }
    }
    return dp[n-1][half-1]
};

// var canPartition = function(nums) {
//     let sum = nums.reduce((acc, v) => acc + v)
//     if (sum % 2 === 1) return false;
//     let half = Math.floor(sum / 2), n = nums.length;

//     const memo = [...new Array(half+1)].map(a => [...new Array(n+1)])

//     const dp = (i, a) => {
//         if (a === 0) return true;
//         if (a < 0 || i >= n) return false;
//         if (memo[a][i] !== undefined) return memo[a][i]
//         let val1 = dp(i+1, a), val2 = dp(i+1, a - nums[i])
//         return memo[a][i] = val1 || val2
//     }
//     return dp(0, half)
// };
console.log(canPartition(nums =[2,2,3,5]))