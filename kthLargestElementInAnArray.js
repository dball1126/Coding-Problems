class MaxHeap {
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

        if (this.array[pIdx] < this.array[idx]) {
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    poll() { // delete/retrieve max
        if (this.array.length <= 1) return null;
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

    peek() {
        return this.array[1];
    }
}

var findKthLargest = function(nums, k) {
    let result;
    const maxHeap = new MaxHeap();
    nums.forEach(n => maxHeap.insert(n))
    for (let i = 0; i < k; i++) {
        result = maxHeap.poll();
    }
    return result;
};

console.log(findKthLargest(nums = [3,2,1,5,6,4], k = 2))