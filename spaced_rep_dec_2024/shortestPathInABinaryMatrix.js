class Node {
    constructor(r, c,val = 0) {
        this.r = r;
        this.c = c;
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
// Dijkstra Algorithm
// Time: O(n * log(n))...n for number of cells...log(n) for insertion/extraction from heap
// Space: O(n)
var shortestPathBinaryMatrix = function(grid) {
    const minHeap = new MinHeap();
    let n = grid.length;
    if (grid[0][0] !== 0 || grid[n-1][n-1] !== 0) return -1;
    let nde = new Node(0,0,1)
    minHeap.insert(nde);
    const visited = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(false))
    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]

    while (!minHeap.isEmpty()) {
        let nde = minHeap.poll();
        let r = nde.r, c = nde.c, v = nde.val;
        if (r === n-1 && c === n-1) return v;
        for (let [x, y] of dirs) {
            let row = r + x, col = c + y;
            if (row >= 0 && row < n && col >= 0 && col < n && !visited[row][col] && grid[row][col] === 0) {
                if (row === n-1 && col === n-1) return v +1;
                visited[row][col] = true;
                minHeap.insert(new Node(row,col,v + 1))
            }
        }
    }
    return -1;
};
console.log(shortestPathBinaryMatrix([[0,1],[1,0]]))