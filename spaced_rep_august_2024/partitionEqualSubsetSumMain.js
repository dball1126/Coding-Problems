/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)...n for nums...m for half the sum of all nums
var canPartition = function(nums) {
    let sum = nums.reduce((acc, v) => acc + v);
    if (sum & 1) return false;
    sum = Math.floor (sum / 2)
    const dp = [...new Array(nums.length+1)].map(a => [...new Array(sum+1)].fill(false));
    for (let arr of dp) arr[0] = true;

    for (let n = 1; n < dp.length; n++) {
        for (let m = 1; m < dp[n].length; m++) {
            let v1 = dp[n-1][m], v2 = false;
            if (m - nums[n-1] >= 0) {
                v2 = dp[n-1][m - nums[n-1]]
            }
            dp[n][m] = v1 || v2
        }
    }
    return dp[nums.length][sum]
};
console.log(canPartition([1,2,3])) // = true   1 + 2  = 3

