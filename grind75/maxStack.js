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

class Node {
    constructor(val, pos, key) { 
        this.val = val;
        this.pos = pos;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}


var MaxStack = function() {
    this.size = 0;
    this.has =  new Set();
    this.maxHeap = new MaxHeapO();

};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(val) {
    this.size += 1
    let node = new Node(val, this.size, this.size + "" + val)
    this.has.add(node.key)
    this.maxHeap.insert(node)
    if (!this.head) {
        this.tail = node;
        this.head = node;
    } else {
        this.head.next = node
        node.prev = this.head;
        this.head = node;
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    if (!this.head) return null;
    const val = this.head.val;
    const prev = this.head.prev;
    this.has.delete(this.head.key)
    if (prev) {
        prev.next = null;
        this.head = prev;
    }
    return val;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    if (!this.head) return null;
    return this.head.val;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    if (this.maxHeap.isEmpty()) return null;
    return this.maxHeap.array[1]
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    let max;
    while (this.maxHeap.size > 1) {
        max = this.maxHeap.poll();
        // if (this.has(max.key))
    }
};
