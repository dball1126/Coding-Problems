class MaxHeap {
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

        if (this.array[pIdx] < this.array[idx]) {
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

        let lNodeVal = this.array[leftIdx] ? this.array[leftIdx] : -Infinity;
        let rNodeVal = this.array[rightIdx] ? this.array[rightIdx] : -Infinity
        
        if (node > lNodeVal && node > rNodeVal) return;

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
    size() {
        return this.array.length-1
    }
}

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
        return this.array.length-1
    }
}


var MedianFinder = function() {
    this.minHeap = new MinHeapNum();
    this.maxHeap = new MaxHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
    if (!this.minHeap.size() || num >= this.minHeap.peek() ){
        this.minHeap.insert(num);
    } else {
        this.maxHeap.insert(num);
    }

    if (this.minHeap.size() - this.maxHeap.size() > 1) {
        this.maxHeap.insert(this.minHeap.poll());
    } else if (this.maxHeap.size() - this.minHeap.size() > 1) {
        this.minHeap.insert(this.maxHeap.poll());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
    if (this.minHeap.size() === this.maxHeap.size()) {
        return (this.minHeap.peek() + this.maxHeap.peek()) / 2
    } else if (this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.peek()
    } else {
        return this.maxHeap.peek()
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
 var obj = new MedianFinder()
 obj.addNum(1)
 obj.addNum(2)
 obj.addNum(3)
 var param_2 = obj.findMedian()
 console.log(param_2)