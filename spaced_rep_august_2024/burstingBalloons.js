/**
 * @param {number[]} nums
 * @return {number}
 */
// Matrix Chain Multiplication
// Top Down Dynamic Programming
// Time and Space: O(n^3)...for dp(1, n-2) *  (dp(l, i-1) * dp(i+1, r)
var maxCoins = function(nums) {
    nums = [1, ...nums, 1]
    const n = nums.length
    const memo = [...new Array(n+1)].map(a => [...new Array(n+1)])

    const dp = (l, r) => {
        if (l > r) return 0;
        if (memo[l][r] !== undefined) return memo[l][r]

        let val = 0
        for (let i = l; i <= r; i++) {
            let newVal = 0
            newVal += (nums[l-1] * nums[i] * nums[r+1])
            newVal += (dp(l, i-1) + dp(i+1, r))
            val = Math.max(val, newVal)
        }
        return memo[l][r] = val
    }
    return dp(1, n-2)
};
console.log(maxCoins([3,1,5,8]))// = 167
