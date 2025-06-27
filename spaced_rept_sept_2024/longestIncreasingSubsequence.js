/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let l = nums.length, max = 1;
    const dp = [...new Array(l+1)].fill(1)

    for (let i = 1; i < l; i++) {
        let curr = dp[i]
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                curr = Math.max(curr, dp[j]+ 1)
            }
        }
        dp[i] = curr
        max = Math.max(curr, max)
    }
    return max
};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))