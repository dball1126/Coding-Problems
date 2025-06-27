/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    let n = nums.length
    let memo = new Map()

    const dp = (i, t) => {
        if (t === target) return 1
        if (i >= n || t > target) return 0
        let k = i +":"+t
        if (memo.has(k)) return memo.get(k)

        let v1 = dp(i+1, t - nums[i]), v2 = dp(i+1, t + nums[i])
        memo.set(k, v1 + v2)
        return memo.get(k)
    }
    return dp(0,0)
};
console.log(findTargetSumWays([1,1,1,1,1]))