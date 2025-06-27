class SegmentTree {
    buffer = 10;
    constructor(size, arr) {
        this.tree = new Array(2 * (size + this.buffer)).fill(0);
        this.size = size;
        this.build(arr);
    }
    build(arr) {
        for (let i = 0; i < this.size; i++) {
            this.tree[this.size + i] = arr[i];
        }
        for (let i = this.size -1; i > 0; i--) {
            this.tree[i] = this.tree[i << 1] + this.tree[i << 1 | 1];
        }
    }

    updateTreeNode(p, value) {
        this.tree[p + this.size] = value;
        p = p + this.size;

        for (let i = p; i > 1; i>>= 1) {
            this.tree[i >> 1] = this.tree[i] + this.tree[i^1];
        }
    }

    query(l, r) {
        let res = 0;

        for (l += this.size, r += this.size; l < r; l >>= 1, r >>= 1) {
            if ((l & 1) > 0) {
                res += this.tree[l++]
            }
            if ((r & 1) > 0) {
                res += this.tree[--r]
            }
        }
        return res;
    }
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let newTree = new SegmentTree(a.length, a)


    // print the sum in range(1,2)
    // index-based
    console.log(newTree.query(1, 3) + "</br>");