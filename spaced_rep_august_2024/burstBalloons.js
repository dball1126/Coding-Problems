/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    nums = [1, ...nums, 1]
    const n = nums.length

    const memo = [...new Array(n+1)].map(a => [...new Array(n+1)])

    const dp = (l, r) => {
        if (l > r) return 0
        if (memo[l][r] !== undefined) return memo[l][r]

        let val = 0
        for (let i = l; i <= r; i++) {
            let newVal = nums[l-1] * nums[i] * nums[r+1]
            let left = dp(l, i-1), right = dp(i+1, r)
            val = Math.max(val, newVal + left + right)
        }
        return memo[l][r] = val
    }
    const result = dp(1, n-2)
    return result
};
console.log(maxCoins([3,1,5,8]))