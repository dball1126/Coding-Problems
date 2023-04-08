
class PriorityQueueMin { // Object version
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

    peek() {
        return this.array[1];
    }

    isEmpty() {
        return this.array.length <= 1
    }
}


class Node {
    constructor(key, val = -Infinity) {
        this.key = key;
        this.val = val;
    }
}

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    
    let visited = Array.from(Array(heights.length), () => Array.from(Array(heights[0].length), () => false))
    
    const dir = [[0,1], [-1,0], [1,0], [0,-1]];
    let [sLen, eLen, pQ, node, val] = [heights.length, heights[0].length, new PriorityQueueMin(), new Node([0,0], 0), undefined];
    pQ.insert(node);

    while (!pQ.isEmpty()) {
        node = pQ.poll();
        [r, c] = node.key;
        visited[r][c] = true;

        if (r === sLen-1 && c === eLen-1) {
            return node.val;
        }

        for (let i = 0; i < dir.length; i++) {
            let d = dir[i];
            let [newR, newC] = [r + d[0], c + d[1]]

            if (newR < 0 || newC < 0 || newR >= sLen || newC >= eLen || visited[newR][newC]) {
                continue;
            }

            val = Math.abs(heights[r][c] - heights[newR][newC])
            val = Math.max(val, node.val)
            pQ.insert(new Node([newR, newC], val))
        }
    }

};

// space is O(n) n + n
// Time is E log(e) 

console.log(minimumEffortPath([[8,6,8,1,4,1],[10,3,1,8,9,10],[1,5,6,9,8,5],[10,4,6,7,3,3],[6,6,9,1,3,3],[3,1,10,3,4,1],[6,1,6,10,7,10]]))