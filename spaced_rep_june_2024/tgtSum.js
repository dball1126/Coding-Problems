var findTargetSumWays = function (nums, S) {

    let n = nums.length
    let sum = nums.reduce((acc, v) =>  acc + v, 0)
    let newTarget = (sum + S)  / 2

    // if (newTarget & 1) return 0

    let dp = [...new Array(n+1)].map(a => [...new Array( newTarget + 1)].fill(0))

    for (let arr of dp) arr[0] = 1;

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j <= newTarget; j++) {
            if (j - nums[i-1] >= 0) {
                dp[i][j] = dp[i-1][j] + dp[i-1][j - nums[i-1]]
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    console.log(dp)
    return dp[dp.length-1][dp[0].length-1]
}   
console.log(findTargetSumWays([1], 1))