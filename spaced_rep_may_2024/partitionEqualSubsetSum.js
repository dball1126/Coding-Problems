/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce(((acc, v) => acc + v)), len = nums.length, sum1 = 0, sum2 = 0
    let memo = [...new Array(len )].map(a => [...new Array(len)])
    let result = false
    if (len === 1) return true
    const dp = (idx, sum1, sum2) => {
        if (sum1 === sum2) return true
        if (idx >= len) return 0
        const len = nums.length
        for (let i = 0; i < len; i++) {
            let p1 = dp(idx+1,sum1+ nums[i], sum2)
            let p2 = dp(idx+1, sum1, sum2 + nums[i])
            memo[i] = p1 + p2
            if (p1 === p2) return result = true;
            
        }
        return memo[idx]
    }
    dp(1, nums[0], 0)
    return result
};
console.log(canPartition([1,5,11,5]))