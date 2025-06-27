
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

var topKFrequent = function(nums, k) {
    let minHeap = new MinHeap(), n = nums.length, result = [], map = new Map()

    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) map.set(nums[i], 0)
        map.set(nums[i], map.get(nums[i]) + 1)
    }

    for(let [key, v] of map) {
        if ((minHeap.array.length-1) < k) {
            minHeap.insert(new Node(key, v))
        } else if (minHeap.peek().val < key) {
            minHeap.poll();
            minHeap.insert(new Node(key, v))
        }
    }

    while (!minHeap.isEmpty()) {
        if ((minHeap.array.length - 1) > k) {
            minHeap.poll()
            continue;
        }
        result.push(minHeap.poll().val)
    }
    return result;
};

console.log(topKFrequent( nums = [3,0,1,0], k = 1))