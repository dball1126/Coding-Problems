class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.arr = arr;
        this.tree = [...new Array(this.n * 4)].fill(0);
        this.build(0, 0, this.n-1);
    }
    build(idx, start, end) {
        if (start === end) {
            return this.tree[idx] = this.arr[start];
        }
        let mid = Math.floor((start + end) / 2)
        this.build(2 * idx + 1, start, mid)
        this.build(2 * idx + 2, mid + 1, end)
        this.tree[idx] = this.tree[2 * idx + 1] + this.tree[2 * idx + 2]
    }
    query(left, right) {
        return this._query(0, 0, this.n-1, left, right)
    }
    _query(idx, start, end, left, right) {
        if (right < start || left > end) {
            return 0;
        }
        if (left <= start && end <= right) {
            return this.tree[idx]
        }
        const mid = Math.floor((start + end) / 2)
        let leftSum  = this._query(2 * idx + 1, start, mid, left, right) 
        let rightSum = this._query(2 * idx + 2, mid+1, end, left, right) 
        return leftSum + rightSum
    }

    update(idx, val) {
        this._update(0, 0, this.n-1, idx, val)
    }
    _update(nde, start, end, idx, val) {
        if (idx < start || idx > end) return;

        if (start === end) {
            this.tree[nde] = val;
            this.arr[idx] = val;
            return
        }
        const mid = Math.floor((start + end) / 2)
        this._update(2 * nde + 1, start, mid, idx, val) 
        this._update(2 * nde + 2, mid+1, end, idx, val) 
        this.tree[nde] = this.tree[2 * nde + 1] + this.tree[2 * nde + 2]
    }
}

const arr = [1, 3, 5, 7, 9, 11];
const segmentTree = new SegmentTree(arr);

console.log("Sum of range [1, 3]:", segmentTree.query(1, 3)); // Output: 15 (3 + 5 + 7)
console.log("Sum of range [0, 5]:", segmentTree.query(0, 5)); // Output: 36 (1 + 3 + 5 + 7 + 9 + 11)


segmentTree.update(1, 10);
console.log("Sum of range [1, 3] after update:", segmentTree.query(1, 3)); // Output: 22(10+5+7)
console.log(arr); // [1, 10, 5, 7, 9, 11]