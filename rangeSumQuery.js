/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    let prev = 0
    this.dp = nums.map(a => prev = a +  prev)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let val = left -1 >= 0 ? this.dp[left-1] : 0
    return this.dp[right] - val
};

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]
