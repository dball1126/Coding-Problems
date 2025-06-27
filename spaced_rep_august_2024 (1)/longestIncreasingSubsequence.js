/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let max = 1, n = nums.length
    const dp = [...new Array(n+1)].fill(1)

    for (let i = 0; i < n; i++) {
        let v = dp[i]
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                v = Math.max(v, dp[j] + 1)
            }
        }
        dp[i] = v
        max = Math.max(max, dp[i])
    }
    return max;
};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))