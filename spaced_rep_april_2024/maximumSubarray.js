/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) return 0
    let max = nums[0], n = nums.length
    const memo = [...new Array(n)]

    const dp = (i) => {
        if (i === n-1) {
            max = Math.max(max, nums[n-1])
            return nums[n-1]
        }
        if (memo[i] !== undefined) return memo[i]
        let next = dp(i+1)
       memo[i] = Math.max(nums[i], nums[i] + next)
       max = Math.max(memo[i], max)
       return memo[i]
    }
    dp(0)
    return max
};
console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4]
    ))