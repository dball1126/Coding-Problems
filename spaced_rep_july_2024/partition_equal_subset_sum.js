/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc,v) => acc + v, 0)
    if (sum % 2 !== 0) return false;
    sum  = Math.floor((sum / 2))

    let dp = [...new Array(nums.length+1)].map(a => [...new Array(sum+1)].fill(false))

    for (let arr of dp) arr[0] = true

    for (let i = 1; i < dp.length; i++) {
        for (let a = 0; a < dp[i].length; a++) {

            if (a - nums[i-1] >= 0) {
                dp[i][a] = dp[i-1][a - nums[i-1]] || dp[i-1][a]
            } else {
                dp[i][a] = dp[i-1][a]
            }
        }
    }
    return dp[dp.length-1][dp[0].length-1]
};

console.log(canPartition([1,2,3,5]))