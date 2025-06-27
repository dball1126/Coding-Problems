/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc,v)=> acc + v)
    if (sum & 1) return false;
    sum /= 2

    const dp = [...new Array(nums.length+1)].map(a => [...new Array(sum +1)].fill(false))
    for (let arr of dp) arr[0] = true

    for (let c = 1; c <= nums.length; c++) {
            for (let r = 1; r <= sum; r++) {
            if ( r - nums[c-1] >= 0) {
                dp[c][r] = dp[c-1][r - nums[c-1]] || dp[c-1][r]
            } else {
                dp[c][r] = dp[c-1][r]
            }
        }
    }
    return dp[nums.length][sum]
};
console.log(canPartition([1,2,3,5]))