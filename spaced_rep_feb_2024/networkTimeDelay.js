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
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let minHeap = new MinHeap() // minimum priority queue
    let map = new Map(), time = 0, visited = new Set()
    for (let [u, v, w] of times) {
        if (!map.has(u)) map.set(u, new Map())
        let nde = new HeapNode(w, v)
        map.get(u).set(v, nde)
    }
    if (map.has(k)) minHeap.insert(new HeapNode(0,k))

    while (!minHeap.isEmpty()) {
        let next = minHeap.poll()
        visited.add(next.key)
        if (visited.size === n) return time
        let distance = 0
        if (map.has(next.key)) {
            for (let [k, v] of map.get(next.key)) {
                if (!visited.has(k)) {
                    time += (v.val - distance)
                    distance = Math.max(distance, v.val)
                    visited.add(k)
                    minHeap.insert(v)
                }
            }
        }
    }

    return -1
};

console.log(networkDelayTime(times = [[1,2,1]], n = 2, k = 2))