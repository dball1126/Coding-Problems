class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.arr = arr;
        this.tree = [...new Array(this.n * 4)].fill(0)
        this.init();
    }
    init() {
        this.build(0, 0, this.arr.length-1)
    }
    build(idx, left, right) {
        let mid = Math.floor((right+left) / 2);

        if (left === right) return this.tree[idx] = this.arr[left];
        let leftIdx = 2 * idx + 1
        let rightIdx = 2 * idx + 2;
        this.build(leftIdx, left, mid);
        this.build(rightIdx, mid+1, right);

        this.tree[idx] = this.tree[leftIdx] + this.tree[rightIdx];
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
        const leftSum = this._query(2 * idx + 1, start, mid, left, right)
        const rightSum = this._query(2 * idx + 2, mid+1, end, left, right)
        return leftSum + rightSum;
    }
}
const arr = [1, 3, 5, 7, 9, 11];
const segmentTree = new SegmentTree(arr);

console.log("Sum of range [1, 3]:", segmentTree.query(1, 3)); // Output: 15 (3 + 5 + 7)
console.log("Sum of range [0, 5]:", segmentTree.query(0, 5)); // Output: 36 (1 + 3 + 5 + 7 + 9 + 11)