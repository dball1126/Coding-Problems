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

class DisJoinSet {
    rank = []
    root = []
    constructor(arr) {
        this.init(arr);    
    }
    init(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.rank[i] = 1;
            this.root[i] = i;
        }
    }
    union(n1, n2) {
        if (this.isConnected(n1, n2)) return;
        let [p1, p2] = [this.find(n1), this.find(n2)];

        if (this.rank[p1] > this.rank[p2]) {
            this.root[p2] = p1;
        } else if (this.rank[p1] < this.rank[p2]) {
            this.root[p1] = p2;
        } else {
            this.root[p2] = this.root[p1]
            this.rank[p1]++;
        }
    }
    find(n) {
        if (this.root[n] === n) return n;
        return this.root[n] = this.find(this.root[n])
    }
    isConnected(n1, n2) {
        return this.find(n1) === this.find(n2);
    }
}   

/******************************************************************************************************************
 * Kruskal's algorithm (undirected graph)
 * Use union find and sort via the manhattan difference.
 * Use min Object heap to store the min points.
 * Time Complexity: O(n2 * log(n)) it takes n*2 to compute the differences. it takes log(n) time to insert into the heap
 *                   O(n2 * log(n) + log(n) * a(n) = O(n2 * log(n))     a(n) = inverse ackermann function
 * 
 * Space Complexity: O(n2) for storing all the edges
 ******************************************************************************************************************/
var minCostConnectPoints = function(points) {
    if (points.length <= 1) return 0;
    const pQ = new MinHeap();
    const unionSet = new DisJoinSet(points);

    for (let i = 0; i < points.length; i++) {
        let [mX, mY] = [points[i][0], points[i][1]];
        for (let j = i+1; j < points.length; j++) {
            let [x, y] = [points[j][0], points[j][1]];
            let val = Math.abs(mX - x) + Math.abs(mY - y)
            const n = new HeapNode(val, [i, j])
            pQ.insert(n)
        }
    }
    let edges = 0;
    let cost = 0;

    while (!pQ.isEmpty()) {
        let n = pQ.poll();

        let [n1, n2] = [n.key[0], n.key[1]]
        
        if (!unionSet.isConnected(n1, n2)) {
            unionSet.union(n1, n2)
            edges++
            cost += n.val;
        }
        if (edges === points.length-1) {
            return cost
        }
    }
}

console.log(minCostConnectPoints([[3,12],[-2,5],[-4,1]]))