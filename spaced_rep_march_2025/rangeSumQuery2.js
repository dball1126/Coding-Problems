
var NumArray = function(nums) {
    this.nums = nums;
    this.n = nums.length
    this.tree = new Array(this.n * 4).fill(0) // segment tree
    this.build(0,0,this.n-1)
};
NumArray.prototype.build = function(idx, start, end) {
    if (start === end) {
        return this.tree[idx] = this.nums[start]
    }
    const mid = Math.floor((start + end) / 2)
    this.build(2 * idx + 1, start, mid)
    this.build(2 * idx + 2, mid+1, end)
    this.tree[idx] = this.tree[2 * idx + 1] + this.tree[2 * idx + 2]
}

NumArray.prototype.update = function(index, val) {
    const _update = (nde, start, end, idx, val) => {
        if (nde < start || nde > end) return;
        if (start === end) {
            this.tree[nde] = val;
            this.nums[idx] = val;
            return;
        }
        const mid = Math.floor((start + end) / 2)
        _update(2 * nde + 1, start, mid, idx, val)
        _update(2 * nde + 2, mid + 1, end, idx, val)
        this.tree[nde] = this.tree[2 * nde + 1] + this.tree[2 * nde + 2]
    }
    _update(0,0,this.n-1, index, val)
};
NumArray.prototype.sumRange = function(left, right) {
    const _query = (nde, start, end, left, right) => {
        if (start > right || end < left) return 0;
        if (left <= start && end <= right) {
            return this.tree[nde]
        }
        const mid = Math.floor((start + end) / 2)
        const leftSum = _query(2 * nde + 1, start, mid, left, right)
        const rightSum = _query(2 * nde + 2, mid + 1, end, left, right)
        return leftSum + rightSum
    }
    return _query(0, 0, this.n-1, left, right)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */