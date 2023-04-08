/**
 * Heap starts at 1 for simplicity of the math(getting partent, left and right child.....it can start at 0).
 * Insertion is log(n) because we try to keep the tree balanced...it's the height of the tree.
 * DeleteMin/Max is log(n)
 * Heapify (insert all nodes) is O(n)...........amortized O(n).
 * Space complexity is O(n) since we use an array to store heap data.
 */

 class HeapNode {
    constructor(val, key) {
        this.val = val;
        this.key = key;
    }
}

class MinHeap { // Object version
    constructor() {
       this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
      }
  
    getLeftChild(idx) {
        return idx * 2;
    }
  
    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(node) {
        this.array.push(node);
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;
        let pIdx = this.getParent(idx)
        let pNode = this.array[pIdx]
        let node = this.array[idx]
        if (!pNode || !node) return;
        if (pNode.val > node.val) {
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    poll() { // delete min/max
        if (this.array.length <= 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let min = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return min;
    }   

    siftDown(idx) {
        if (this.array.length <= 2) return;
        let node = this.array[idx]
        if (!node) return;

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);

        let lNodeVal = this.array[leftIdx] ? this.array[leftIdx].val : Infinity;
        let rNodeVal = this.array[rightIdx] ? this.array[rightIdx].val : Infinity
        
        if (node.val < lNodeVal && node.val < rNodeVal) return;

        let swapIdx;
        if (lNodeVal < rNodeVal) {
            swapIdx = leftIdx
        }  else {
            swapIdx = rightIdx
        }

        [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]]
        this.siftDown(swapIdx);
        
    }

    isEmpty() {
        return this.array.length <= 1
    }

    peek() {
        return this.array[1];
    }

    size() {
        return this.array.length-1
    }
}
 var kSmallestPairs = function(nums1, nums2, k) {
    let [pairs, pQ] = [[], new MinHeap()]
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let [v1, v2] = [nums1[i], nums2[j]]
            pQ.insert(new HeapNode(v1+v2, [v1, v2]))
        }
    }

    while (!pQ.isEmpty()) {
        if (pairs.length === k) return pairs;
        let node = pQ.poll();
        pairs.push(node.key)
    }
    return pairs
};

console.log(kSmallestPairs(nums1 = [1,2], nums2 = [3], k = 3))