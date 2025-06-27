/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    let prev = 0
    this.dp = nums.map(a => prev = a +  prev)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    const diff = this.nums[index]
    this.nums[index] = val
    for (let i = idx; i < this.dp.length; i++) {
        this.dp[i] -= diff
        this.dp[i] += val
    }
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

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */