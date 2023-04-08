class Node {
    constructor(key,val = 0) {
        this.key = key
        this.val = val

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
// Dijksta Algorithm
// Time O((V + E) * log(n))...node + edges + insertion/extraction into heap
// Space: O(V + E)
var networkDelayTime = function(times, n, k) {
    if (n === 1 && k === n) return 0
    const adjList = new Map(), visited = new Set(), minQueue = new MinHeap();;

    for(let [edge1, edge2 , distance] of times) {
        if (!adjList.has(edge1)) adjList.set(edge1, [])
        adjList.get(edge1).push(new Node(edge2, distance))
    }
    minQueue.insert(new Node(k))

    while (!minQueue.isEmpty()) {
        let node = minQueue.poll();
        if (visited.has(node.key)) continue;
        visited.add(node.key)
        if (visited.size === n) return node.val

        if (adjList.has(node.key)) {
            const edges = adjList.get(node.key);
            edges.forEach(edge => {
                minQueue.insert(new Node(edge.key, node.val + edge.val))
            })
        }   
    }
    return -1;
}; console.log(networkDelayTime(times = [[1,2,1]], n = 2, k = 2)) // = 2