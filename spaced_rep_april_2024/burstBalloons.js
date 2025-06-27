/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    
    let n = nums.length
    let memo = [...new Array(n)].map(a => [...new Array(n)])
    const dp = (idx, j) => {
        if ( idx > j || j >= n || idx < 0 || j < 0) return 0
        if (idx === j) return nums[idx]
        // if (memo[idx][j] !== undefined) return memo[idx][j]
        let newVal = -Infinity;
        for (let i = idx; i <= j; i++) {
            let prev = 1, next = 1
            if (i-1 >= 0) prev = nums[i-1]
            if (i+1 <= j) next = nums[i+1]
            let currVal = prev * nums[i] * next
            let left = dp(idx, i-1), right = dp(i+1, j)
            newVal = Math.max(newVal, currVal + (left * right))
        }
        memo[idx][j] = newVal
        return newVal;
    }
    return dp(0, n-1)
};
console.log(maxCoins(nums = [3,1,5,8]))