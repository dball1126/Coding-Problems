class HeapNode {
    constructor(val, key) {
        this.val = val;
        this.key = key
    }
}

class MaxHeapO { // Object version
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
        if (pNode === undefined || node === undefined) return;
        if (pNode.val < node.val) {
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

        let lNodeVal = this.array[leftIdx] ? this.array[leftIdx].val : -Infinity;
        let rNodeVal = this.array[rightIdx] ? this.array[rightIdx].val : -Infinity
        
        if (node.val > lNodeVal && node.val > rNodeVal) return;

        let swapIdx;
        if (lNodeVal > rNodeVal) {
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
}
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// Max Heap / Priority Queue
// Time: O(n * log(k))
// Space: O(k)
var kClosest = function(points, k) {
    const minHeap = new MaxHeapO(), result = [];

    for (let [x, y ] of points) {
        minHeap.insert(new HeapNode(
            ((x ** 2) + (y ** 2)),
            [x,y]
        ))
        if (minHeap.array.length > k+1) minHeap.poll(); // Ensure log(k) Space
    }

    while (!minHeap.isEmpty()) {
        result.push(minHeap.poll().key)
    }
    return result;
};
console.log(kClosest(points = [[1,3],[-2,2]], k = 1)) // = [[-2,2]]

