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


/**
 * @param {number[][]} grid
 * @return {number}
 */
// Dijkstra Algorithm
// Time: O((m * n) + (log(n * m) * 8) ) worst case
// Space: O(n * m)
var shortestPathBinaryMatrix = function(grid) {
    if (!grid.length) return 0
    if (grid[0][0] !== 0) return -1
    let n = grid.length, m = grid[0].length
    let minHeap = new MinHeap()
    const dirs = [[1,0], [-1,0], [0, 1], [0, -1], [-1, -1], [1, 1], [-1, 1], [1, -1]]
    
    let nde = new Node([0, 0], 1)
    minHeap.insert(nde)

    let visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))

    while (!minHeap.isEmpty()) {
        let node = minHeap.poll()
        let [r, c] = node.key
        visited[r][c] = true;

        if (r === n-1 && c === m-1) {
            return node.val
        }

        for (let [x, y] of dirs) {
            let rX = x + r, cY = c + y
            if (rX >= 0 && rX < n && cY >= 0 && cY < m) {
                if (!visited[rX][cY] && grid[rX][cY] === 0) {
                    visited[rX][cY] = true;
                    let newNode = new Node([rX, cY], 1 + node.val)
                    minHeap.insert(newNode)
                }
            }
        }

    }
    return -1
};

console.log(shortestPathBinaryMatrix([
    [1,0,0],
    [1,1,0],
    [1,1,0]]))