/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = nums.reduce((acc, v) =>acc+v)
    if (k === 1) return sum === k;
    if (sum % 1) return false;
    sum = Math.floor(sum / k)

    const dp = [...new Array(nums.length+1)].map(a => [...new Array(sum+1)].fill(0))
    for (let arr of dp) arr[0] = 1

    for (let r = 1; r < dp.length; r++) {
        for (let c = 1; c < dp[r].length; c++) {

            if (c - nums[r-1] >= 0) {
                dp[r][c] += dp[r-1][c-nums[r-1]]
            }

        }
    }
    console.log(dp)
    return dp[dp.length-1][dp[0].length-1] 
};
console.log(canPartitionKSubsets(nums = [4,3,2,3,5,2,1], k = 4))