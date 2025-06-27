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
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

// Sorting + min Heap
// Time O(n * log(n) + O(n * log(n)) + O(1) = O(n * log(n))
// Space: O(n)
var carPooling = function(trips, capacity) {
    trips.sort((a, b) => a[1] - b[1])
    let minHeap = new MinHeap()
    let curr = 0
    for (let i = 0; i < trips.length; i++) {
        const [numPassengers, from, to] = trips[i];
        while (minHeap.peek() !== undefined && minHeap.peek().val <= from) {
            let item = minHeap.poll();
            curr -= item.key[0]
        }
        curr += numPassengers
        minHeap.insert(new Node(trips[i], to))
        if (curr > capacity) return false;
    }
    return true;
};
console.log(carPooling([[3,2,7],[3,7,9],[8,3,9]], capacity = 11))//= true


