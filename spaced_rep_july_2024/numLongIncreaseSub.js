/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const len = nums.length
    const dp = [...new Array(len+1)].map(a => 
        [...new Array(len+1)].fill(1))
    let max = -Infinity, map = new Map()
    
    for (let i = 0; i < len; i++) {

        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i][j] = Math.max(dp[i][j] , dp[i][j] + 1)
            }
        }
    }

    console.log(dp)

};
console.log(findNumberOfLIS([1,3,5,4,7]))