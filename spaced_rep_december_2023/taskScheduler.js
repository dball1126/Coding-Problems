class HeapNode {
    constructor(val, key) {
        this.val = val;
        this.key = key
    }
}

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
// Priority Queue. Max Heap
// Time: O(n * log(m)^2)...we extract/reinsert while map has a size which is based off of n
// m + 26 * log(m)
// n * log(m) + 26 * log(m)
// Space: O(1)...map and max heap will be max size of 26
var leastInterval = function(tasks, n) {
    let result = 0, curr = 0, map = new Map(), maxHeap = new MaxHeapO();
    tasks.forEach(task => {
        if (!map.has(task)) map.set(task, 0)
        map.set(task, map.get(task) + 1)
    })
    for(let [k,v] of map) {
        maxHeap.insert(new HeapNode(v, k))
    }

    while (map.size) {
        let reinsert = []
        while (!maxHeap.isEmpty()) {
            let node = maxHeap.poll();
            curr +=1
            if (node.val - 1 > 0) {
                map.set(node.key, node.val-1)
                node.val = node.val-1
                reinsert.push(node)
            } else {
                map.delete(node.key)
            }
            if (curr > n) break;
        }
        reinsert.forEach(nde => maxHeap.insert(nde))
        if (curr <= n && map.size) curr = n+1
        result += curr
        curr = 0
    }

    return result;
};
console.log(leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], n = 2))//= 12

