class SegmentTree {
    constructor(arr) {
        this.arr = arr;
        this.n = arr.length;
        this.tree = new Array(this.n * 4).fill(0)
        this.build(0,0,this.n-1)
    }
    build(idx, start, end) {
        if (start === end) {
            return this.tree[idx] = this.arr[start]
        }
        let mid = Math.floor((start + end) / 2)
        this.build(2 * idx + 1, start, mid)
        this.build(2 * idx + 2, mid + 1, end)
        this.tree[idx] = this.tree[2 * idx + 1] + this.tree[2 * idx + 2]
    }
    query(left, right) {
        return this._query(0,0,this.n-1, left, right)
    }
    _query(nde, start, end, left, right) {
        if (right < start || left > end) {
            return 0;
        }

        if (left <= start && end <= right) {
            return this.tree[nde]
        }
        let mid = Math.floor((start + end) / 2)
        let leftSum = this._query(2 * nde + 1, start, mid, left, right)
        let rightSum = this._query(2 * nde + 2, mid + 1, end, left, right)
        return leftSum + rightSum
    }
}const arr = [1, 3, 5, 7, 9, 11];
const segmentTree = new SegmentTree(arr);

console.log("Sum of range [1, 3]:", segmentTree.query(1, 3)); // Output: 15 (3 + 5 + 7)
console.log("Sum of range [0, 5]:", segmentTree.query(0, 5)); // Output: 36 (1 + 3 + 5 + 7 + 9 + 11)
