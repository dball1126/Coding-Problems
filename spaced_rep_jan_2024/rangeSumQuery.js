
// Prefix Sum, Dynamic Programming
// Time and Space: O(n)
var NumArray = function(nums) {
    let prefixSum = 0
    this.dp = nums.map(a => prefixSum += a)
};

NumArray.prototype.sumRange = function(left, right) {
    return this.dp[right] - (left-1 >= 0 ? this.dp[left-1] : 0)
};
