/**
 * Heap starts at 1 for simplicity of the math(getting partent, left and right child.....it can start at 0).
 * Insertion is log(n) because we try to keep the tree balanced...it's the height of the tree.
 * DeleteMin/Max is log(n)
 * Heapify (insert all nodes) is O(n)...........amortized O(n).
 * Space complexity is O(n) since we use an array to store heap data.
 */





class MinHeapNum {
    constructor() {
       this.array = [undefined];
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

        if (this.array[pIdx] > this.array[idx]) {
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    poll() { 
        if (this.array.length <= 1) return undefined;
        if (this.array.length === 2) return this.array.pop();
        let max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return max;
    }   

    siftDown(idx) {
        if (this.array.length <= 2) return;
        let node = this.array[idx]

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);

        let lNodeVal = this.array[leftIdx] !== undefined ? this.array[leftIdx] : Infinity;
        let rNodeVal = this.array[rightIdx] !== undefined ? this.array[rightIdx] : Infinity
        
        if (node < lNodeVal && node < rNodeVal) return;

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
        return this.array.length
    }
}

class Node {
    constructor(key,val = 0) {
        this.key = key
        this.val = val

    }
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
// Priority Queue
// Time O(n * log(n))
// Space: O(n)
var minMeetingRooms = function(intervals) {
    let minHeap = new MinHeapNum();
    intervals.sort((a, b) => a[0] - b[0]) // O(n * log(n))

    for (let [x, y] of intervals) { // O(n * log (n))
        if (!minHeap.isEmpty() && minHeap.peek() <= x) {
            minHeap.poll()
        }
        minHeap.insert(y)
    }

    return minHeap.size() - 1
};
console.log(minMeetingRooms( [[7,10],[2,4]]))
/**
 *
   [[2,4],[7,10]]
   7
 * 
 */