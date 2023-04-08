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
 * Create a min heap
 * insert each list into the heap
 * create a linked list and extract from the heap
 * Space: O(n)
 * Time: O(n) to insert into heap. log(n) to extract = O(n)
 */
var mergeKLists = function(lists) {
    const newLists = lists.filter(list => list !== null)
    if (!newLists.length) return null
    if (newLists.length === 1) return newLists[0]

    const pq = new MinHeapNum();
    let head;
    let currHead;

    lists.forEach(list => {
        while (list) {
            pq.insert(list.val)
            list = list.next
        }
    })

    while (!pq.isEmpty()) {
        let curr = new ListNode(pq.poll())
        if (!head) {
            head = curr;
            currHead = curr;
        } else {
            currHead.next = curr;
            currHead = currHead.next
        }
    }
    return head;
};

let node1 = new ListNode(1)
let node2 = new ListNode(-1)
let node3 = new ListNode(0)
let node4 = new ListNode(1)

node1.next = node2;
node3.next = node4;

console.log(mergeKLists([node1, node3]))
