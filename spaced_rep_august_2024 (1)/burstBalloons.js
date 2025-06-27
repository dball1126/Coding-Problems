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
        // if (l === r) return nums[l]
        
        if (memo[l][r] !== undefined) return memo[l][r]
        let val = 0
        for (let i = l; i <= r; i++) {
            const left = dp(l, i-1);
            const right = dp(i+1, r);
            let newVal = nums[l-1] * nums[i] * nums[r+1]
            val = Math.max(val,( newVal + (left + right)))
        }
        return memo[l][r] = val
    }
    return dp(1, nums.length-2)
};
console.log(maxCoins([3,1,5,8]))