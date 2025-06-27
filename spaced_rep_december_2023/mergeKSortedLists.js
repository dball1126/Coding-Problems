class Node {
    constructor(key,val = 0) {
        this.key = key
        this.val = val
    }
}
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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Time: O(N * L * log(L))
// Space: O(N * L)...n for num of lists and L for length of list
var mergeKLists = function(lists) {
    let head = null, minHeap = new MinHeapNum(), curr = null

    lists.forEach(list => {
        while (list) {
            minHeap.insert(list.val)
            list = list.next
        }
    })
    while (!minHeap.isEmpty()) {
        let v = minHeap.poll()
        node = new ListNode(v)
        if (!head) {
            head = node; curr = node
        } else {
            curr.next = node;
            curr = node;
        }
    }
    return head;
};