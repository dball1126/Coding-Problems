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
}

/**
 * O(E) for space since the adjList needs our edges
 * O(V + E * log(n)) V for notes, E for edges to be visited and log(n) for insertion into the heap
 */
var networkDelayTime = function(t, n, k) {
    const minHeap = new MinHeap(), map = new Map();
    n -= 1
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i][0])) map.set(t[i][0], new Set())
        map.get(t[i][0]).add(t[i])
        if (t[i][0] === k) {
            node = new HeapNode(t[i][2], t[i][1])
            minHeap.insert(node)
        }
    }
    while (!minHeap.isEmpty()) {
        let node = minHeap.poll();
        n -= 1
        if (n <= 0) return node.val
        if (!map.has(node.key)) continue
        let edges = Array.from(map.get(node.key))
        edges.forEach(e => {
            let n = new HeapNode(node.val + e[2], e[1])
            minHeap.insert(n)
        })
    }
    return -1;
};

console.log(networkDelayTime(times = [[1,2,1]], n = 2, k = 2))