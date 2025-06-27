/**
 * @param {number[]} nums
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time: O(n^2)
// Space: O(n)e
var lengthOfLIS = function(nums) {
    let n = nums.length, max = 0;
    let memo = [...new Array(n)]

    const dfs = (idx) => {
        if (idx >= n) return 0
        if (memo[idx] !== undefined) return memo[idx]
        let val = 1;
        for (let i = idx+1; i < n; i++) {
            if (nums[idx] < nums[i]) {
                val = Math.max(val, dfs(i) + 1)
            }
        }
        max = Math.max(max, val)
        return memo[idx] = val
    }
    for (let i = 0; i < n; i++) {
        dfs(i)
    }
    return max;
};
console.log(lengthOfLIS(  [0,1,0,3,2,3]))// = 4

