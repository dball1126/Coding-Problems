class Node {
    constructor(r, c, val = 0) {
        this.r = r
        this.c = c
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
// Time: O(r * c * log(r * c) * 4)  = O((r * c) * log(r * c))
// Space: O(r * c)
var swimInWater = function(grid) {
    let n = grid.length, m = grid[0].length, time = grid[0][0], minHeap = new MinHeap()
    const dirs = [[0,1],[1,0],[-1,0],[0,-1]]
    const visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))
    visited[0][0] = true;
    minHeap.insert(new Node(0,0, grid[0][0]))

    while (!minHeap.isEmpty()) {
        let node = minHeap.poll();
        let r = node.r, c = node.c
        time = Math.max(time, grid[r][c])

        if (r === n-1 && c === m-1) return time;

        for(let [r1, c1] of dirs)  {
            let x = r + r1, y = c + c1;
            if (x >= 0 && y >= 0 && x < n && y < m && !visited[x][y]) {
                visited[x][y] = true;
                minHeap.insert(new Node(x, y, grid[x][y]))
            }
        }
        let peek = minHeap.peek()
        let x1 = peek.r, y1 = peek.c
        if (grid[x1][y1] > time) time = grid[x1][y1]
    }
};
console.log(swimInWater([[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]))// = 16

