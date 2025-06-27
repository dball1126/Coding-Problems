/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = Math.floor( nums.reduce((acc,v)=>  acc + v))
    if ( sum & 1) return false
    let dp = [...new Array(nums.length_1)].map(a => [...new Array(sum + 1)].fill(0))

    sum = Math.floor(sum / k)

    for (let j = 1; k < nums.length; j++) {
        for (let i = 0; i <= k; i++) {
            if (i - j >= 0) {
                dp[j][i] = Math.max( dp[j-1][i], dp[j-1][i-j])
            } else {
                dp[j][i] = Math.max( dp[j-1][i], dp[j][i])
            }
        }
    }
    return dp[nums.length-1][k]
};
console.log(canPartitionKSubsets(ums = [4,3,2,3,5,2,1], k = 4))