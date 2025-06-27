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

class Node {
    constructor(val, key, stops) {
        this.val = val; this.key = key; this.stops = stops;
    }
}
// Time complexity: O(N+E⋅K⋅log(E⋅K))
// Space: O(N+E⋅K)
var findCheapestPrice = function(n, flights, src, dst, stops) {
    let adjList = new Map(), minHeap = new MinHeap(), result = Infinity, visited = new Map()

    for (let [f, t, p] of flights) {
        if (!adjList.has(f)) adjList.set(f, [])
        adjList.get(f).push([t, p])
    }

    if (adjList.has(src)) minHeap.insert(new Node(0, src, 0))

    while (!minHeap.isEmpty()) {
        let nde = minHeap.poll();
        if (nde.key === dst) {
            return result = Math.min(nde.val, result)
        }
        if (!visited.has(nde.key)) {
            visited.set(nde.key, nde.stops)
        } else if (visited.get(nde.key) > nde.stops) {
            visited.set(nde.key, nde.stops)
        } else {
            continue;
        }

        if (adjList.has(nde.key)) {
            for (let [k, v] of  adjList.get(nde.key)) {
                if (k === dst) {
                    result = Math.min(result, nde.val + v)
                } else if (nde.stops + 1 <= stops) {
                    minHeap.insert(new Node(nde.val + v, k, nde.stops + 1))
                }
            } 
        }
    }
    return result === Infinity ? -1 : result;
};
console.log(findCheapestPrice(n = 11, flights = [[0,3,3],[3,4,3],[4,1,3],[0,5,1],[5,1,100],[0,6,2],[6,1,100],[0,7,1],[7,8,1],[8,9,1],[9,1,1],[1,10,1],[10,2,1],[1,2,100]], src = 0, dst = 2, k = 4))

/**
 11
[[0,3,3],[3,4,3],[4,1,3],[0,5,1],[5,1,100],[0,6,2],[6,1,100],[0,7,1],[7,8,1],[8,9,1],[9,1,1],[1,10,1],[10,2,1],[1,2,100]]
0
2
4


 * 
 */