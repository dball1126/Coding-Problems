class Node {
    constructor(key,val = 0, path = "") {
        this.key = key;
        this.val = val;
        this.path = path;
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
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
// Dijkstra Algorithm
// Time and Space: O(2^n)
var countPaths = function(n, roads) {
    let minQ = new MinHeap(), minVal = undefined, count = 0
    const valMap = new Map(), adjList = new Map(), allPaths = new Set()
    for (let [n1, n2, v] of roads) {
        if (!adjList.has(n1)) adjList.set(n1, [])
        if (!adjList.has(n2)) adjList.set(n2, [])
        adjList.get(n1).push(n2)
        adjList.get(n2).push(n1)
        valMap.set(n1+""+n2, v)
        valMap.set(n2+""+n1, v)
    }
    if (adjList.has(0)) {
        minQ.insert(new Node(0, 0, "0"))
    }
    while (!minQ.isEmpty()) {
        let node = minQ.poll()
        if (adjList.has(node.key)) {
            let arr = adjList.get(node.key)
            for (let nde of arr) {
                if (nde === node.key) continue;
                let newNode = new Node(
                    nde, 
                    node.val + valMap.get(node.key+""+nde),
                    node.path + nde)
  
                    if ((nde === n-1 && minVal === undefined) ||(minVal !== undefined && minVal === newNode.val && nde === n-1)) {
                        minVal = newNode.val;
                        count++
                        continue;
                    } else if (minVal === undefined || (newNode.val <= minVal)) {
                        if (allPaths.has(newNode.path)) continue;
                        allPaths.add(newNode.path)
                        minQ.insert(newNode)
                    }
            }
        }
    }
    return count
};

console.log(countPaths(n = 2, roads = [[1,0,10]]
    ))