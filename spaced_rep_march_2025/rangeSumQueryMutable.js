class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.arr = arr;
        this.tree = [...new Array(this.n * 4)].fill(0);
        this.build(0, 0, this.n-1)
    }
    build(idx, start, end) {
        if (start === end) {
            return this.tree[idx] = this.arr[start]
        }
        let mid = Math.floor((start + end) / 2)
        this.build(2 * idx + 1, start, mid)
        this.build(2 * idx + 2, mid+1, end)
         this.tree[idx] = this.tree[2 * idx + 1] + this.tree[2 * idx + 2]
    }
    query(left, right) {
       return this._query(0, 0, this.n-1, left, right)
    }
    _query(idx, start, end, left, right) {
        if (right < start || left > end) return 0

        if (left <= start && end <= right) {
            return this.tree[idx]
        }
        let mid = Math.floor((start + end) / 2)
        let leftSum = this._query(2 * idx + 1, start, mid, left, right)
        let rightSum = this._query(2 * idx + 2, mid+1, end, left, right)
        return leftSum + rightSum;

    }
    update(idx, val) {
        return this._update(0, 0, this.n-1, idx, val)
    }
    _update(nde, start, end, idx, val) {
        if (idx < start || idx > end) return

        let mid = Math.floor((start + end) / 2)
        if (start === end) {
            this.tree[nde] = val
            this.arr[idx] = val;
            return
        }
        this._update(2 * nde + 1, start, mid, idx, val);
        this._update(2 * nde + 2, mid + 1, end, idx, val);
        this.tree[nde] = this.tree[2 * idx + 1] + this.tree[2 * idx + 2];
    }
}
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.segmentTree = new SegmentTree(nums);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.segmentTree.update(index, val);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.segmentTree.sumRange(left, right);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */