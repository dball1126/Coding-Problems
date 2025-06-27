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
// Time : O(n * log(k))...k being the number of groups which is bounded by 26
// Space: O(k)...bounded by a constant size of 26
var reorganizeString = function(s) {
    let map = new Map(), maxHeap = new MaxHeapO(), result = ""
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) map.set(s[i], 0)
        map.set(s[i], map.get(s[i]) + 1)
    }
    for (let [k, v] of map) maxHeap.insert(new HeapNode(v, k))

    while (!maxHeap.isEmpty()) {
        let node = maxHeap.poll(), last = result[result.length-1]
        if (last === node.key && maxHeap.isEmpty()) return ""

        if (last !== node.key) {
            result += node.key
            node.val -=1
            if (node.val > 0) maxHeap.insert(node)
        } else {
            let secondNode = maxHeap.poll()
            result += secondNode.key
            secondNode.val -=1
            if (secondNode.val > 0) maxHeap.insert(secondNode)
            maxHeap.insert(node)
        }
    }
    return result;
};
console.log(reorganizeString("aaaabbc")) // = abacaba


