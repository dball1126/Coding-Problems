/**
 * Heap starts at 1 for simplicity of the math(getting partent, left and right child.....it can start at 0).
 * Insertion is log(n) because we try to keep the tree balanced...it's the height of the tree.
 * DeleteMin/Max is log(n)
 * Heapify (insert all nodes) is O(n)...........amortized O(n).
 * Space complexity is O(n) since we use an array to store heap data.
 */





class MinHeapNum {
    constructor() {
       this.array = [undefined];
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

        if (this.array[pIdx] > this.array[idx]) {
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    poll() { 
        if (this.array.length <= 1) return undefined;
        if (this.array.length === 2) return this.array.pop();
        let max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return max;
    }   

    siftDown(idx) {
        if (this.array.length <= 2) return;
        let node = this.array[idx]

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);

        let lNodeVal = this.array[leftIdx] !== undefined ? this.array[leftIdx] : Infinity;
        let rNodeVal = this.array[rightIdx] !== undefined ? this.array[rightIdx] : Infinity
        
        if (node < lNodeVal && node < rNodeVal) return;

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
        return this.array.length
    }
}

// const minHeap = new MinHeap();
// let node1 = new HeapNode(1)
// let node2 = new HeapNode(2)
// let node3 = new HeapNode(3)
// let node4 = new HeapNode(4)
// let node5 = new HeapNode(5)
// let node6 = new HeapNode(6)
// let node7 = new HeapNode(7)
// let node8 = new HeapNode(8)
// let node9 = new HeapNode(9)

// let node10 = new HeapNode(10)
// let node11 = new HeapNode(11)
// let node12 = new HeapNode(12)

// minHeap.insert(node4)
// minHeap.insert(node6)
// minHeap.insert(node2)
// minHeap.insert(node1)
// minHeap.insert(node3)

// minHeap.insert(node12)
// minHeap.insert(node11)
// minHeap.insert(node10)

// minHeap.insert(node5)
// minHeap.insert(node9)
// minHeap.insert(node8)
// minHeap.siftDown(1)

// console.log(minHeap.poll())
// console.log(minHeap.poll())
// console.log(minHeap.poll())
// console.log(minHeap.poll())
// console.log(minHeap.poll())
// console.log(minHeap.poll())
// console.log(minHeap.poll())
// console.log(minHeap.poll())
// console.log(minHeap.poll())
// console.log(minHeap.poll())
// console.log(minHeap.poll())


// console.log(minHeap.peek())


class Node {
    constructor(key,val = 0) {
        this.key = key
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
