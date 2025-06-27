/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    if (!nums.length) return 0
    let max = 1, n = nums.length
    let memo = [...new Array(n)].map(a => [...new Array(n)])

    const dp = (c, idx) => {
        if (idx >= n) return 0;
        if (memo[c][idx] !== undefined) return memo[c][idx]

        memo[c][idx] = 1;

        for (let i = idx; i < n; i++) {
            if (nums[i] > nums[c]) {
                memo[c][idx] = 1 + Math.max(memo[c][idx], dp(i,i+1))
            }
        }
        max = Math.max(max, memo[c][idx])
        return memo[c][idx] 
    }
    for(let i = 0; i < n; i++) {
        dp(i, i+1)
    }

    return max
};
console.log(findNumberOfLIS([1,3,5,4,7]))