class Node {
    constructor(val, key1, key2) {
        this.val = val; this.key1 = key1; this.key2 = key2
    }
}
class UnionFind {
    root = []; rank = []; connected = 0
    constructor(n) {
        this.root = new Array(n); this.rank = new Array(n)
        for(let i = 1; i <= n; i++) {
            this.root[i] = i; this.rank[i] = 1;
        }
    }
    union(n1, n2) {
        let p1 = this.find(n1), p2 = this.find(n2)
        if (p1 === p2) return false;
        this.connected+=1
        if (this.rank[p1] > this.rank[p2]) {
            this.root[p2] = p1
        } else if (this.rank[p2] > this.rank[p1]) {
            this.root[p1] = p2
        } else {
        this.rank[p1]+=1
        this.root[p2] = p1
        }
        return true;
    }
    find(node) {
        let p1 = this.root[node]
        if (p1 === node) return node;
        this.root[node] = this.find(this.root[node])
        return this.root[node] 
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

// Union Find, minHeap
// TIME: O(n + (m * (log(m))))
// n for nodes, m for connections, log(m) for insert/extract from minHeap
// and uionFind uses rank which runs in amorized time and considered O(1)
// SPACE: O(m)...for connections
var minimumCost = function(n, connections) {
    if (n === 1) return 0;
    const minHeap = new MinHeap(), unionFind = new UnionFind(n)
    let minCost = 0
    for (let [x, y, cost] of connections) {
        minHeap.insert(new Node(cost, x, y))
    }
    while (!minHeap.isEmpty()) {
        let node = minHeap.poll();
        if (unionFind.union(node.key1, node.key2)) {
            minCost += node.val;
            if (unionFind.connected === n-1) return minCost
        }
    }
    return -1;
};

console.log(minimumCost(n = 4, connections = [[1,2,3],[3,4,4]]))