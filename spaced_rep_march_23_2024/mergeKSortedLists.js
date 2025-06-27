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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Priority Queue, Minimum heap
// Time: O((n) * log(k))...n being number of lists...m being longest list in n
// insertion and extraction for the heap is log(k)
// Space: O(log(k))
var mergeKLists = function(lists) {
    if (!lists.length) return [null]
    if (lists.length === 1) return lists[0]

    const minHeap = new MinHeap()
    let tail = null, head = null;

    for (let list of lists) {
        while (list) {
            minHeap.insert(list)
            list = list.next
        }
    }

    while (!minHeap.isEmpty()) {
        let nde = minHeap.poll();
        if (!head) head = nde;
        if (!tail) {
            tail = nde;
        } else {
            tail.next = nde;
            tail = nde;
        }
    }
    return head;
};
/**
 * [1,3,4] = minHeap
 * [[1,],[1,3,4]]
 *  1 -> 1
 * step 1   nde = 1   head = nde(1), tail = nde (1)
 * step 2   nde = 1       tail = second (1)
 * step 3   nde = 3         1 - > 1 - > 3  tail = 3
 * step 4   nde = 4        1 -> 1 -> 3 - > 4  tail = 4
 */
