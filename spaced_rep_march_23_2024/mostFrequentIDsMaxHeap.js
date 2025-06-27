class Node {
    constructor(key,val = 0) {
        this.key = key
        this.val = val

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
var mostFrequentIDs = function(nums, freq) {
    let result = []
    const maxHeap = new MaxHeapO()
    let map = new Map()
    for (let i = 0; i < freq.length; i++) {
        let f = freq[i]
        let id = nums[i]

        if (!map.has(id)) {
            map.set(id, 0)
            map.set(id, map.get(id) + f)
            maxHeap.insert(new Node(id, map.get(id)))
        } else {
            let collect = []
            while (!maxHeap.isEmpty()) {
               let nde = maxHeap.poll()
               if (nde.key !== id) {
                collect.push(nde)
               } else {
                break
               }
            }
            map.set(id, map.get(id) + f)
            maxHeap.insert(new Node(id, map.get(id)))
            collect.forEach(n => maxHeap.insert(n))
        }   
        let topNode = maxHeap.poll()

        result.push(topNode.val > 0 ? topNode.val : 0)
        maxHeap.insert(topNode)
    }

    return result;
};