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
}
// Use a MaxHeap
// Time is n log(n)
// space is O(n) n is the stones or input
 var lastStoneWeight = function(stones) {
    const pQueue = new MaxHeap();

    stones.forEach(s => pQueue.insert(s));

    while (!pQueue.isEmpty()) {
        let [v1, v2] = [pQueue.poll(), pQueue.poll()]
        if (v2 === undefined && v1 !== undefined) {
            return v1;
        } else if (v2 === v1) {
            continue;
        } else {
            let newVal = v1 - v2;
            pQueue.insert(newVal);
        }
    }
    return 0;
};

console.log(lastStoneWeight([1]))