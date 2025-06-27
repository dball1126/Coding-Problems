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
}
class Node {
    constructor(key,val = 0) {
        this.key = key
        this.val = val

    }
}

// Passes Test Cases
var kClosest = function(points, k) {
    const heap = [] // this should be a real heap such as const heap = new MinHeap()

    for (let [x, y] of points) {
        let node = new Node([x, y])
        node.val = (x - 0)**2 + (y - 0)**2
       heap.push(node)
    }
    heap.sort((a, b) => b.val - a.val) // simulating how a heap works since we JavaScript does not have a built in version

    const result = []
    while (heap.length && result.length !== k) {
        let node = heap.pop()
        result.push(node.key)
    }
    return result
};

// Min Heap AKA Priority Queue
// Time: O(n * log(n))
// Space: O(n)
var kClosest = function(points, k) {
    const heap = new MinHeap()

    for (let [x, y] of points) {
        let node = new Node([x, y])
        node.val = (x - 0)**2 + (y - 0)**2
       heap.insert(node)
    }

    const result = []
    while (!heap.isEmpty() && result.length !== k) {
        let node = heap.poll()
        result.push(node.key)
    }
    return result
};

console.log(kClosest(points = [[1,3],[-2,2]], k = 1)) // = [[-2,2]]


