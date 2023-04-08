class MaxHeapO { // Object version
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
        if (pNode === undefined || node === undefined) return;
        if (pNode.val < node.val) {
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

        let lNodeVal = this.array[leftIdx] ? this.array[leftIdx].val : -Infinity;
        let rNodeVal = this.array[rightIdx] ? this.array[rightIdx].val : -Infinity
        
        if (node.val > lNodeVal && node.val > rNodeVal) return;

        let swapIdx;
        if (lNodeVal > rNodeVal) {
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
    constructor(key, val = -Infinity, min = Infinity) {
        this.key = key;
        this.val = val;
        this.min = min;
    }
}


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinimumPath = function(grid) {
    const visited = grid.map(a => a.map(() => false));
    let [len, eLen, priorityQ] = [grid.length, grid[0].length, new MaxHeapO()]
    const dir = [[1,0],[-1,0],[0,1],[0,-1]]
    priorityQ.insert(new Node([0,0], grid[0][0], grid[0][0]))


    while (!priorityQ.isEmpty()) {
        let node = priorityQ.poll();
        let [r, c] = node.key;
        visited[r][c] = true;

        if (r === len-1 && c === eLen-1) {
            return node.min;
        }

        for (let i = 0; i < dir.length; i++) {
            const d = dir[i];
            let [newRow, newCol] = [d[0] + r, d[1] + c]
            
            if (newRow < 0 || newCol < 0 || newRow >=  len || newCol >= eLen || visited[newRow][newCol]) {
                continue;
            }

            let val = grid[newRow][newCol]
            let min = Math.min(node.min, val)
            priorityQ.insert(new Node([newRow, newCol], val, min))
        }

    }

};
console.log(maximumMinimumPath(  grid = [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]))