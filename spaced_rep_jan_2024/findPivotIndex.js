/**
 * @param {number[]} nums
 * @return {number}
 */
// Prefix Sum
// Time and Space: O(n)
var pivotIndex = function(nums) {
    let prev = 0, n = nums.length
    let dp = nums.map(v => prev += v)

    for (let i = 0; i < n; i++) {
        let left = i-1 >= 0 ? dp[i-1] : 0
        let right = i+1 < n ? dp[n-1] - nums[i] - left : 0
        if (left === right) return i
    }
    return -1
};
console.log(pivotIndex([1,7,3,6,5,6]))//= 3
